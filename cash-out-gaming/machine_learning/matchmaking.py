import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

class Matchmaking:
    def __init__(self):
        self.data = pd.read_csv('matchmaking_data.csv')

    def train_model(self):
        X = self.data.drop(['match_id', 'winner'], axis=1)
        y = self.data['winner']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)

        y_pred = model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)

        return model, accuracy

    def predict_match(self, player1, player2):
        model, _ = self.train_model()
        player1_data = self.data[self.data['player1'] == player1]
        player2_data = self.data[self.data['player2'] == player2]

        player1_features = player1_data.drop(['match_id', 'winner'], axis=1)
        player2_features = player2_data.drop(['match_id', 'winner'], axis=1)

        player1_features = player1_features.mean().values
        player2_features = player2_features.mean().values

        features = pd.DataFrame([player1_features, player2_features]).T
        prediction = model.predict(features)

        return prediction