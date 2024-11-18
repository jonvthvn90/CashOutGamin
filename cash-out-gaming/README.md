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