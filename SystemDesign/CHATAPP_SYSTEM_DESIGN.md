# System Design of ChatApp

This document outlines the system design for a scalable, real-time chat application.

## Acknowledgement

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## What is a Chat Application

A chat application is a software platform that enables users to send and receive instant messages in real-time. These applications allow users to communicate with one another via text, voice, or video, providing a seamless and instantaneous way to connect, whether one-on-one or in groups.

## Requirements

Our system should meet the following requirements:

#### Functional Requirements :

    1. Server should receive data.
    2. Should support one-on-one chat.
    3. Group chats.
    4. Should support file sharing.

#### Non Functional Requirements :

    1. Ensure reliability and high availability
    2. Minimize delays for quick response times.
    3. Enable efficient scalability to support growing users and data.

#### Extended requirements :

    1. Sent, Delivered, and Read receipts of the messages.
    2. Show the last seen time of users.
    3. Push notifications.

## Estimation and Constraints

#### Traffic :

- **Daily Active Users (DAU):** 10 million
- **Messages per User:** 15
- **Total Messages:** 150 million per day
  - **Media Files:** 10% of messages are media (~15 million media files/day)

> **Explanation:** We assume 10 million users, each sending 15 messages per day. About 10% of those messages include media like images, videos, or files.

#### Requests Per Second (RPS) :

- **RPS:** 150 million messages/day ≈ 1,736 requests per second

> **Explanation:** Dividing 150 million messages by 86,400 seconds (1 day) gives us ~1.7K requests per second.

#### Storage :

- **Text Messages:** 14 GB/day (average 100 bytes per message)
- **Media Files:** 750 GB/day (50 KB per file)
- **Total Storage (10 years):** ~2.8 PB

> **Explanation:** For text messages, 100 bytes per message means 14 GB of daily storage for 150 million messages. Media files at 50 KB each would require 750 GB per day. Over 10 years, the total estimated storage requirement is ~2.8 PB.

#### Bandwidth :

- **Required Bandwidth:** 90 MB/s (for 764 GB/day)

> **Explanation:** To handle 764 GB of total data (14 GB for text + 750 GB for media), we need around 90 MB per second.

#### High-level Summary :

| Type                 | Estimate     |
| :------------------- | :----------- |
| `DAU`                | `10 million` |
| `RPS`                | `1,736/s`    |
| `Storage (daily)`    | `~764 GB`    |
| `Storage (10 years)` | `~2.8 PB`    |
| `Bandwidth`          | `~90 MB/s`   |

## Data Model Design

![Alt text](imgs/Data_Design_Model.png)

This document outlines the database schema and data model for a chat application. The system consists of several core entities that manage users, chat groups, and messages exchanged within those groups.

#### Tables Overview :

#### 1. **Users Table**

This table stores basic user information required to identify and manage individual users within the system.

| Column       | Data Type | Description                                      |
| ------------ | --------- | ------------------------------------------------ |
| `id`         | Int       | Unique identifier for each user (auto-increment) |
| `name`       | String    | The name of the user                             |
| `email`      | String    | The unique email address of the user             |
| `provider`   | String    | Authentication provider (e.g., Google, Facebook) |
| `oauth_id`   | String    | ID from the authentication provider              |
| `image`      | String?   | URL of the user's profile image (optional)       |
| `created_at` | DateTime  | The date and time when the user was created      |

#### 2. **Chat Groups Table**

This table manages the chat groups, allowing users to participate in conversations with multiple members.

| Column       | Data Type | Description                                            |
| ------------ | --------- | ------------------------------------------------------ |
| `id`         | String    | Unique identifier for each chat group (UUID)           |
| `user_id`    | Int       | Foreign key referencing the user who created the group |
| `title`      | String    | The title of the chat group                            |
| `passcode`   | String    | Optional passcode for group access                     |
| `created_at` | DateTime  | The date and time when the group was created           |

#### 3. **Group Users Table**

This table links users to chat groups, indicating which users are members of which groups.

| Column       | Data Type | Description                                                        |
| ------------ | --------- | ------------------------------------------------------------------ |
| `id`         | Int       | Unique identifier for the group-user relationship (auto-increment) |
| `group_id`   | String    | Foreign key referencing the chat group (UUID)                      |
| `name`       | String    | Name of the user in the group                                      |
| `created_at` | DateTime  | The date and time when the user joined the group                   |

#### 4. **Chats Table**

This table stores the chat messages exchanged within each group.

| Column       | Data Type | Description                                        |
| ------------ | --------- | -------------------------------------------------- |
| `id`         | String    | Unique identifier for each chat message (UUID)     |
| `group_id`   | String    | Foreign key referencing the chat group (UUID)      |
| `message`    | String?   | The content of the chat message (optional)         |
| `name`       | String    | Name of the user who sent the message              |
| `file`       | String?   | URL of any file shared in the chat (if applicable) |
| `created_at` | DateTime  | The date and time when the message was sent        |

#### Relationships

- **Users and Chat Groups**: A user can create multiple chat groups, and each group can have multiple users.
- **Chat Groups and Group Users**: Each chat group can have multiple users linked to it.
- **Chat Groups and Chats**: A chat group can contain many chat messages, each sent by different users.

#### Conclusion

This data model provides a comprehensive structure for managing users, chat groups, and messages in a chat application. By utilizing relational database principles, it ensures that the system can efficiently handle user interactions and maintain data integrity. Feel free to modify the descriptions or details to better fit your application's specific requirements!

## Design

### Cross-Server Communication Issues

This document outlines the design considerations for a simple chat application that allows users to communicate in real-time using Socket.IO. The application aims to provide a seamless chat experience across different users connected to the same server. However, challenges arise when users are connected to different servers or ports, which limits their ability to communicate with each other.

![Alt text](imgs/cors.png)

#### **Problem Statement** :

> When a user connects to a specific server or port (e.g., User-4 on Port B), they are unable to communicate with users connected to another server or port (e.g., Users on Port A). This isolation can hinder the overall chat experience, especially in scenarios where users need to interact with others across different servers.

#### Example Scenario

- Server Setup:
  - Port A: Hosts users User-1, User-2, and User-3.
  - Port B: Hosts User-4.
- Communication Issue:
  - User-1 on Port A sends a message to User-4 on Port B.
  - Due to the architecture, User-1 cannot reach User-4, leading to a fragmented communication experience.

### Solving Cross-Server Communication Issues with Redis Pub/Sub

#### **Problem Statement** :

> In a chat application, users connected to different servers or ports cannot communicate with each other directly. For instance, if User-1 sends a message while connected to Server 1, User-4, who is connected to Server 2, will not receive that message due to the inherent isolation between the two servers. This lack of interoperability can lead to fragmented user experiences and limit the application's functionality, preventing a seamless communication flow among all users.

#### Proposed Solution: Redis Pub/Sub

##### Redis :
> Redis is a fast, in-memory database that helps store and manage data quickly. It's often used for real-time applications, like chat apps, because it can send messages between users instantly. Redis uses a simple system called Pub/Sub, where messages are published to channels and everyone subscribed to those channels can receive them immediately. This makes it great for handling lots of messages without delays.

![Alt text](imgs/redis_adapter.png)

To address the issue of cross-server communication, we can implement a messaging architecture using Redis Pub/Sub. This solution enables real-time message broadcasting and allows users connected to different servers to communicate effortlessly.

![Alt text](imgs/redis_pub_sub.png)

#### How It Works :
1. User Sends a Message 
    - When User-1 wishes to send a message, they emit an event using Socket.IO:

```javascript
socket.emit("MESSAGE", "hello");
```
2. Publishing to Redis:
    - The message is then published to a designated Redis channel, such as `Event.MESSAGES` :

```
redisClient.publish("Event.MESSAGES", JSON.stringify({ userId: User-1.id, message: "hello" }));
```

3. Subscription by Other Users:

    - All users connected to various servers subscribe to the same Redis channel:
```
redisClient.subscribe("Event.MESSAGES");
```

4. Message Broadcasting:

    - When a message is published, Redis broadcasts it to all clients that are subscribed to the channel. Each subscribed client listens for new messages:
```javascript
redisClient.on("message", (channel, message) => {
    const { userId, message } = JSON.parse(message);
    displayMessage(userId, message);
});
```
5. Message Handling:

   - Upon receiving a message, each client can update its UI to display the new message, ensuring that all users are kept in sync.

#### Benefits of Using Redis :
- Real-Time Communication: Redis Pub/Sub enables instantaneous message delivery, enhancing the overall chat experience by minimizing latency.
- Decoupling: The architecture effectively decouples the message producers (users) from the message consumers (other users), allowing for flexible scaling without tight coupling.
- Performance: Redis operates primarily in memory, which allows for extremely low-latency message handling, even under heavy loads.

    
