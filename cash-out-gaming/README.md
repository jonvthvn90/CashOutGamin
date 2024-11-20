# Game API

This is a RESTful API for managing games.

## Endpoints

* GET /games: Retrieve a list of all games
* GET /games/:id: Retrieve a game by ID
* POST /games: Create a new game
* PUT /games/:id: Update a game
* DELETE /games/:id: Delete a game

## Models

* Game: Represents a game with properties for title, description, and platform

## Controllers

* GameController: Handles requests for games
* GameFeedbackController: Handles requests for game feedback
* GameRatingController: Handles requests for game ratings

## Services

* GameService: Provides business logic for games
* GameFeedbackService: Provides business logic for game feedback
* GameRatingService: Provides business logic for game ratings

## Tests

* Tests are written using Jest and cover all endpoints and business logic

# API Documentation

This API provides endpoints for interacting with the Twitch, PayPal, and Cash App APIs.

## Endpoints

### Twitch API

* `GET /twitch/streams`: Retrieves a list of Twitch streams.
* `GET /twitch/streams/{id}`: Retrieves a single Twitch stream by ID.
* `POST /twitch/streams`: Creates a new Twitch stream.
* `PUT /twitch/streams/{id}`: Updates a Twitch stream.
* `DELETE /twitch/streams/{id}`: Deletes a Twitch stream.

### PayPal API

* `GET /paypal/transactions`: Retrieves a list of PayPal transactions.
* `GET /paypal/transactions/{id}`: Retrieves a single PayPal transaction by ID.
* `POST /paypal/transactions`: Creates a new PayPal transaction.
* `PUT /paypal/transactions/{id}`: Updates a PayPal transaction.
* `DELETE /paypal/transactions/{id}`: Deletes a PayPal transaction.

### Cash App API

* `GET /cashapp/transactions`: Retrieves a list of Cash App transactions.
* `GET /cashapp/transactions/{id}`: Retrieves a single Cash App transaction by ID.
* `POST /cashapp/transactions`: Creates a new Cash App transaction.
* `PUT /cashapp/transactions/{id}`: Updates a Cash App transaction.
* `DELETE /cashapp/transactions/{id}`: Deletes a Cash App transaction.