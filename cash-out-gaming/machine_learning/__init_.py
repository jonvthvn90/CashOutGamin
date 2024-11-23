from .matchmaking import Matchmaking
from .train import train_model
from .predict import predict_match

def get_matchmaking():
    return Matchmaking()
