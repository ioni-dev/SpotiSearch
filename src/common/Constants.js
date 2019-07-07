// i store my constants in a different location, i'm trying to be more organized with my code.


export const CLIENT_ID = '7de21a20993e45e3944b3617cea27a7b'; // Your client id
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const REDIRECT_URI = "http://localhost:3000/";
export const BASE_URL = 'https://api.spotify.com/v1/search?';
export const SCOPES = [
  "user-read-private",
  "user-read-email",
];