/**
 * API Configuration
 * 
 * This module exports the base URL for API requests based on the environment.
 * - In development: Uses VITE_API_URL if defined, otherwise falls back to localhost
 * - In production: Uses VITE_API_URL if defined, otherwise defaults to empty string
 */

// Get the API URL from environment variable
const envApiUrl = import.meta.env.VITE_API_URL;

// Determine the API base URL based on environment
let apiBaseURL: string;

if (import.meta.env.DEV) {
  // Development mode
  if (envApiUrl) {
    apiBaseURL = envApiUrl;
  } else {
    // Fallback to localhost in development
    apiBaseURL = "http://127.0.0.1:8000";
    console.warn(
      "[API Config] VITE_API_URL is not defined. Falling back to localhost in development mode."
    );
  }
} else {
  // Production mode
  if (envApiUrl) {
    apiBaseURL = envApiUrl;
  } else {
    // No fallback to localhost in production
    apiBaseURL = "";
    console.error(
      "[API Config] VITE_API_URL is not defined in production. API requests will fail."
    );
  }
}

export { apiBaseURL };
