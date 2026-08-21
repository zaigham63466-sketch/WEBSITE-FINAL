# Backend Setup Instructions for Hostinger

This project includes a Node.js Express backend designed to serve the static React App and provide API endpoints for form submissions. It expects to be run on Hostinger's Node.js App platform.

## 1. Environment Variables

Before starting the app, ensure the following environment variables are set in your Hostinger Node.js App dashboard:
- `DB_HOST` (e.g., `localhost` or your Hostinger DB IP)
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

*(Note: `PORT` is automatically assigned by Hostinger, but you can set it if testing locally).*

## 2. Database Setup

You must manually create the leads table in your database. 
1. Open phpMyAdmin from your Hostinger dashboard.
2. Select your database.
3. Go to the SQL tab and paste the contents of `server/schema.sql`.
4. Execute the script to create the `leads` table.

## 3. Starting the App on Hostinger

1. In the Hostinger Node.js App configuration, set the **Startup File** (or Entry Point) to `server/index.js`.
2. Ensure you have run `npm install` to install the required `express` and `mysql2` packages.
3. Restart the Node.js application from the panel.

## Notes
- **Email Sending:** Email notifications for form submissions are NOT yet implemented. (See `TODO` in `server/index.js`).
