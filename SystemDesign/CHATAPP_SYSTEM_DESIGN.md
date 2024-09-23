
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

| Type                   | Estimate               |
|:-----------------------|:-----------------------|
| `DAU`                    | `10 million`             |
| `RPS`                    | `1,736/s`                |
| `Storage (daily)`        | `~764 GB`                |
| `Storage (10 years)`     | `~2.8 PB`                |
| `Bandwidth`              | `~90 MB/s`               |

## Data Model Design

![Alt text](imgs/Data_Design_Model.png)

