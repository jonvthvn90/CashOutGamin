from .matchmaking import Matchmaking
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def train_model(dataset):
    # Create an instance of the Matchmaking class
    matchmaking = Matchmaking(dataset)

    # Preprocess the dataset
    matchmaking.preprocess_data()

    # Split the dataset into training and testing sets
    matchmaking.split_data()

    # Train a random forest classifier on the training data
    matchmaking.train_model()

    # Evaluate the performance of the model on the testing data
    matchmaking.evaluate_model()

    # Return the trained model
    return matchmaking.model