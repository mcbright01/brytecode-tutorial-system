# BryteCode Tutorial System

A React, TypeScript, and Vite tutoring platform with Firebase prepared for authentication, Firestore data, and file uploads.

## Firebase setup

1. Create a Firebase project and register a Web app in the Firebase Console.
2. Enable **Authentication → Email/Password**.
3. Create a **Cloud Firestore** database and enable **Storage**.
4. Copy `.env.example` to `.env.local` in the project root and enter the Web app configuration values from **Project settings → Your apps**. These are client configuration values, not Firebase Admin credentials; never put service-account keys in this frontend app.
5. Configure and deploy restrictive Firestore and Storage security rules before using real student, tutor, or payment data. The app does not ship permissive rules.
6. Install dependencies and start Vite with `npm install` and `npm run dev`.

Vite reads `.env.local` from the project root. Restart the dev server after changing environment values.

## Firebase code

- `src/config/firebase.ts` initializes Firebase lazily and exposes Authentication, Firestore, and Storage clients.
- `src/services/auth.ts` registers student accounts, creates `users/{uid}` profiles, signs users in/out, and requests password resets.
- `src/services/firestore.ts` provides typed CRUD helpers for Firestore collections.
- `src/services/storage.ts` uploads files and returns their download URLs.

New student profiles are stored in `users/{uid}` with `name`, `email`, `role`, `phone`, `status`, `created_at`, and `updated_at`. Login uses the stored profile role to route students and tutors to their dashboards. Tutor accounts should be provisioned through a trusted administrative workflow rather than allowing public self-registration as a tutor.

The client SDK is not an authorization boundary. Enforce role and ownership checks in Firebase Security Rules (or trusted server code), and never rely on hidden frontend routes to protect data.

## Development

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
