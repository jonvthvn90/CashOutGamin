import pandas as pd
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier

class Matchmaking:
    def __init__(self):
        self.data = pd.read_csv('data/matches.csv')

    def train_model(self):
        X = self.data.drop(['match_date', 'match_time'], axis=1)
        y = self.data['match_date']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)
        return model

    def predict_match(self, user_id, opponent_id, game_id):
        model = self.train_model()
        data = pd.DataFrame({'user_id': [user_id], 'opponent_id': [opponent_id], 'game_id': [game_id]})
        prediction = model.predict(data)
        return prediction