# Hotel Booking App

This project is a Hotel booking application built using Node.js, MongoDb, Cloudinary ,Stripe, various middlewares and user management functionalities.

## Features 🌟

- **Tailwind Design:** Stylish UI with Tailwind CSS.
- **Animations and Effects:** Enhance user experience with dynamic elements.
- **Full Responsiveness:** Optimal viewing on various devices.
- **Clerk Authentication:** Seamless user authentication with email, Google, and 9+ social logins.
- **Form Handling:** Client-side validation using react-hook-form and server error handling with react-toast.
- **Image Generation:** Tool powered by Open AI.
- **Video Generation:** Utilize Replicate AI for video content creation.
- **Conversation Generation:** Open AI-powered tool for generating dynamic conversations.
- **Music Generation:** Replicate AI for personalized music creation.
- **Loading State:** Informative page loading states for a smoother user experience.
- **Stripe Subscription:** Monthly subscription handling for financial transactions.
- **Free Tier with API Limiting:** Provide a free tier with controlled API access.
- **RESTful Routes:** Implementation of POST, DELETE, and GET routes in route handlers (app/api).
- **Database Access:** Fetch data in server react components directly from the database without using APIs (like Magic!).
- **Component Relations:** Manage relations between server and child components efficiently.
- **Layout Reusability:** Demonstrate how to reuse layouts for consistent design.
- **Folder Structure:** Organized folder structure in Next.js 13 App Router for clarity and scalability.

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

# Install dependencies
  $npm install
  # <Create .env appropriately>

# This is needed if you are planning to run studydrive locally
  $npx prisma db push

# Start the app in development mode with hot-code reloading by running:
  $npm run dev
```

## Support 💬

Join Our [Telegram Group](https://www.telegram.dog/codexbotzsupport) For Support/Assistance And Our [Channel](https://www.telegram.dog/codexbotz) For Updates.

Report Bugs, Give Feature Requests There..

##

**⭐️ Star this Repo if you Liked it! ⭐️**
