from .matchmaking import Matchmaking

def predict_match(team1, team2, model):
    # Create an instance of the Matchmaking class
    matchmaking = Matchmaking(None)

    # Use the trained model to predict the outcome of a match between two teams
    prediction = matchmaking.predict_match(player1= team1,player2= team2)

    # Return the predicted outcome
    return prediction