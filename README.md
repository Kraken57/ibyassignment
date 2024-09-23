## ChatApp - A Messaging Service Prototype

### Name: Ahmad Saad (22115011)
### Univeristy : IIT Roorkee
### Department : Electrical Engineering

---

This project is a real-time chat application designed to facilitate instant communication between users. It allows multiple users to engage in live conversations with real-time updates using Socket.IO. The app also features Google-based authentication through NextAuth for secure login, and a responsive, modern UI built with Tailwind CSS and shadcn components.

### Technologies Used

- [Next.js](https://nextjs.org/) (Server and Client-side rendering)
- [shadcn](https://ui.shadcn.com/) (Component library)
- [Prisma](https://www.prisma.io/) (ORM)
- [Tailwind CSS](https://tailwindcss.com/) (CSS Framework)
- [Axios](https://axios-http.com/docs/intro) (HTTP Client)
- [Zod](https://zod.dev/) (Schema validation)
- [@hookform/resolvers Zod](https://react-hook-form.com/) (Form validation with Zod and react-hook-form)
- [react-hook-form](https://react-hook-form.com/) (Form handling)
- [jsonwebtoken](https://jwt.io/) (JWT Authentication)
- [@radix-ui/react-icons](https://react-icons.github.io/react-icons/) (Icon library)
- [Socket.IO](https://socket.io/) (Real-time communication)
- [Redis](https://redis.io/) (In-memory data store)
- [PostgreSQL](https://www.postgresql.org/) (Database)
- [Supabase](https://supabase.com/) (Backend as a service for authentication and database)
- [Google Cloud Console](https://console.cloud.google.com/) (OAuth)
- [NextAuth](https://next-auth.js.org/) (Authentication library for Next.js)
- [Socket.IO-Client]((https://socket.io/)) (Client for real-time communication)
- [cross-env](https://www.npmjs.com/package/cross-env) (Environment variable management)

---

### Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en) (version >= 16.0.0)
- [PostgreSQL](https://www.postgresql.org/) (for database setup)
- [Redis](https://redis.io/) (for real-time functionalities)
- [Supabase](https://supabase.com/) (for user authentication)
- [Google Cloud Console](https://console.cloud.google.com/) account for OAuth
- A [GitHub](https://github.com/) account to clone the repository

## Getting Started
1. Clone the repository :

    ```bash
    git clone https://github.com/Kraken57/ibyassignment
    cd ibyassignment
    ```

2. Install Dependencies

    ```bash
    npm install
    ```
    > make sure you have `npm` installed in you device

    or

    ```bash
    yarn install
    ```
3. Setup Environment Variables

    Create a .env file in the root directory and add the following:

    ```bash
    DATABASE_URL=postgresql://username:password@localhost:5432/yourdb
    REDIS_URL=redis://localhost:6379
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```
    > Replace the placeholder values (username, password, etc.) with your actual credentials.

4. Setup PostgreSQL (**Optional as we will use Supabase**)

    Make sure PostgreSQL is running on your system. You can create a database with the following commands:

    ```
    psql postgres
    CREATE DATABASE yourdb;
    ```

5. Setup Prisma
    To migrate the database schema, run:

    ```bash
    npx prisma migrate dev
    ```

    This will generate your database schema based on the Prisma models.

6. Run Redis

    Ensure Redis is running locally. If Redis is installed, you can start it with:

    ```bash
    redis-server
    ```
    > Try setting up `docker` to use `redis` as it makes it easier
7. OAuth Setup (Google Auth)
    
    Go to the Google Cloud Console, create a new project, and configure the OAuth consent screen.

    - Add your application details.
    - Set the redirect URI to http://localhost:3000/api/auth/callback/google.
    - Save your Client ID and Client Secret to the .env file.

8. Running the Application

    Once everything is set up, start the development server:

    ```bash
    npm run dev
    ```
    
    or

    ```bash
    yarn dev
    ```

    This should launch the application on http://localhost:3000.

9. Using Socket.IO

    Make sure the Socket.IO server is running. Check the `server.js` or equivalent file for the configuration. If you’re using `socket.io-client`, it should connect automatically.

10. Prisma Studio (Optional)

    If you'd like to view and manage your database via Prisma Studio, run:

    ```bash
    npx prisma studio
    ```

### Running Tests

If you've implemented any tests, include instructions on how to run them here:

```bash
npm run test
```

### Additional Setup Notes
    
- Tailwind CSS: Ensure you're using the proper class utilities as per the Tailwind configuration.
    
- Cross-Env: If you're dealing with cross-platform environment variables, ensure you're using cross-env in your scripts for consistency.


## Reason for using these Technologies

- **Next.js (Server and Client-side rendering)**: Chosen for its ability to handle both server-side rendering (SSR) and static site generation (SSG), ensuring better performance and SEO compared to traditional client-side rendering frameworks like React.

- **shadcn (Component library)**: Provides a rich set of customizable UI components, allowing for a consistent design throughout the app while reducing the need to build components from scratch.

- **Prisma (ORM)**: Simplifies database interactions by allowing developers to write queries in a type-safe manner. Compared to raw SQL queries, Prisma reduces complexity and integrates seamlessly with PostgreSQL.

- **Tailwind CSS (CSS Framework)**: Tailwind CSS allows for rapid UI development through utility classes. Unlike traditional CSS frameworks like Bootstrap, it gives developers more flexibility without enforcing pre-built design patterns.

- **Axios (HTTP Client)**: Axios is more feature-rich and flexible than the native Fetch API, providing better support for intercepting requests, automatic JSON transformation, and handling HTTP errors more effectively.

- **Zod (Schema validation)**: Zod enables concise schema validation and parsing for both frontend and backend data, ensuring data integrity and reducing the risk of runtime errors.

- **@hookform/resolvers Zod (Form validation with Zod and react-hook-form)**: This package integrates Zod with react-hook-form, providing seamless validation within form components, resulting in less boilerplate code compared to manual validation.

- **react-hook-form (Form handling)**: Unlike traditional form handling methods like controlled inputs, react-hook-form optimizes re-render performance by reducing unnecessary renders, making it highly efficient for managing form states.

- **jsonwebtoken (JWT Authentication)**: JWT is a secure method for token-based authentication, ensuring that user sessions are encrypted and verifiable without relying on server-side session storage.

- **@radix-ui/react-icons (Icon library)**: A minimalistic and consistent icon set that integrates well with the shadcn component library, helping maintain a clean and uniform UI without overloading the project with excessive icons.

- **Socket.IO (Real-time communication)**: Enables real-time, bi-directional communication, making it essential for live chat applications. It offers more flexibility and ease of use than WebSocket by abstracting common tasks like reconnection.

- **Redis (In-memory data store)**: Redis provides lightning-fast data retrieval for frequently accessed data and manages real-time session data efficiently, especially in real-time communication systems like chat applications.

- **PostgreSQL (Database)**: PostgreSQL is used for its robust support for relational data and its ability to scale, making it a great choice for handling complex queries and storing persistent data.

- **Supabase (Backend as a service for authentication and database)**: Supabase provides authentication and database management out of the box, reducing the overhead of setting up these services manually. It simplifies the backend by combining database and auth into one service.

- **Google Auth (OAuth)**: Integrated for quick and easy Google-based authentication, making it easier for users to log in securely without needing to manage usernames and passwords.

- **NextAuth (Authentication library for Next.js)**: NextAuth handles OAuth integration and user session management, making it easier to secure protected routes and manage authentication without manually implementing token management.

- **Socket.IO-Client (Client for real-time communication)**: Facilitates real-time communication on the client side, allowing users to exchange messages instantly with minimal latency.

- **cross-env (Environment variable management)**: Ensures compatibility when setting environment variables across different operating systems (Windows, Mac, Linux) during development and production.

This detailed reasoning for each technology choice will help others understand why your stack is optimized for building this real-time chat application and why it’s more effective than common alternatives.