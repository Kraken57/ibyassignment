## ChatApp - A Messaging Service Prototype

### Name: Ahmad Saad (22115011)
### Univeristy : IIT Roorkee
### Department : Electrical Engineering

---

This project is a real-time chat application designed to facilitate instant communication between users. It allows multiple users to engage in live conversations with real-time updates using Socket.IO. The app also features Google-based authentication through NextAuth for secure login, and a responsive, modern UI built with Tailwind CSS and shadcn components.

### Technologies Used

- Next.js (Server and Client-side rendering)
- shadcn (Component library)
- Prisma (ORM)
- Tailwind CSS (CSS Framework)
- Axios (HTTP Client)
- Zod (Schema validation)
- @hookform/resolvers Zod (Form validation with Zod and react-hook-form)
- react-hook-form (Form handling)
- jsonwebtoken (JWT Authentication)
- @radix-ui/react-icons (Icon library)
- Socket.IO (Real-time communication)
- Redis (In-memory data store)
- PostgreSQL (Database)
- Supabase (Backend as a service for authentication and database)
- Google Auth (OAuth)
- NextAuth (Authentication library for Next.js)
- Socket.IO-Client (Client for real-time communication)
- cross-env (Environment variable management)

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