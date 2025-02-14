# News Aggregator
This is a backend API for a news aggregator application built with Node.js and Express.js. It supports user registration, login, preference management, and fetching news articles based on user preferences from external news APIs.

## Features
- User registration and login with password hashing and token-based authentication
- User news preferences management
- Fetch news articles from external sources based on user preferences
- Input validation and error handling

## API Endpoints

### Auth

`POST` `/users/signup` 
- Description: Register a new user
- Request body: 
```json
{ "name": "string", "email": "string", "password": "string", "preferences": ["string"] }
```

`POST` `/users/login` 
- Description: Log in a user
- Request body: 
```json
{ "email": "string", "password": "string" }
```

### Preferences
`GET` `/users/preferences` 
- Description: Retrieve the news preferences for the logged-in user
- Headers: Authorization: Bearer <token>

`PUT` `/users/preferences` 
- Description: Update the news preferences for the logged-in user
- Headers: Authorization: Bearer <token>
- Request body: 
```json
{ "preferences": ["string"] }
```

### News
`GET` `/news` 
- Description: Fetch news articles based on the logged-in user's preferences
- Headers: Authorization: Bearer <token>