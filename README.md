# Hotel Booking App

This project is a Hotel booking application built using Node.js, MongoDb, Cloudinary ,Stripe, various middlewares and user management functionalities.

## Features 🌟

- **Post operations on hotels** Functionality for users to perform CRUD (Create, Read, Update, Delete) operations on hotel entries.
- **Tailwind Design:** Stylish UI with Tailwind CSS.
- **Full Responsiveness:** Optimal viewing on various devices.
- **Form Handling:** Client-side validation using react-hook-form and server error handling with react-toast.
- **Payment integration:** Monthly subscription handling for financial transactions.
- **RESTful Routes:** Implementation of POST, DELETE, and GET routes in route handlers (app/api).
- **Database Access:** Fetch data in server react components directly from the database without using APIs (like Magic!).
- **Component Relations:** Manage relations between server and child components efficiently.
- **Layout Reusability:** Demonstrate how to reuse layouts for consistent design.

## Tech Stack 🛠️

- **NODE.JS:** React-based framework for building modern web applications.
- **Tailwind CSS:** Utility-first CSS framework for highly customizable UIs.
- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **Cloudinary:** Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.
- **Playwright:** enables reliable end-to-end testing for modern web apps
- **Stripe:** Payment processing for seamless transactions in your application.

## Getting Started 🚦

### Prerequisites 🚧

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

### Environment Variables ⚙️

To run this project, you will need to add the following environment variables to your .env file:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY `:Your Clerk public key. This identifies your Clerk project to the client-side of your application.
- `CLERK_SECRET_KEY` :Your Clerk secret key.This is used by the server-side of your application to talk securely with Clerk's API.
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Path for user sign-in (`/sign-in`).
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Path for user sign-up (`/sign-up`).
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`: Redirect URL after user sign-in (`/dashboard`).
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`: Redirect URL after user sign-up (`/dashboard`).
- `OPENAI_API_KEY `: Your OpenAI API Key (for interacting with OpenAI services)
- `REPLICATE_API_TOKEN`:Your Replicate API Token (for interacting with Replicate services)
- `DATABASE_URL`: Your MongoDB connection URL.
- `STRIPE_API_KEY`: Public key for your Stripe application.
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret.
- `NEXT_PUBLIC_APP_URL`: Application URL, e.g., "http://localhost:3000".

### How To Use 🚀

From your command line:

```bash
# Clone this repository
  $git clone https://github.com/SHABIN-K/hotelbooking-mern-app.git

# Go into the repository
  $cd hotelbooking-mern-app
```
 Navigate to the `server` folder and create two files: `.env` and `.env.e2e`. Add the following contents to both files:

    ```plaintext
    MONGODB_CONNECTION_STRING=

    JWT_SECRET_KEY=
    FRONTEND_URL=

    # Cloudinary Variables
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    STRIPE_API_KEY=
    ```

 Navigate to the `client` folder and create a file: `.env`:

    ```plaintext
    VITE_API_BASE_URL=
    VITE_STRIPE_PUB_KEY=
    ```

## Support 💬

Join Our [Telegram Group](https://www.telegram.dog/codexbotzsupport) For Support/Assistance And Our [Channel](https://www.telegram.dog/codexbotz) For Updates.

Report Bugs, Give Feature Requests There..

##

**⭐️ Star this Repo if you Liked it! ⭐️**
