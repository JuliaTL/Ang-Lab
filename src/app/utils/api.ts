import { environment } from '../../environments/environment';

export const apiBaseURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
export const apiBaseURLSignUp = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;

//apiKey = AIzaSyDGSIQekralXH3lQVhZIFEoUOvUQN_0LWY;
