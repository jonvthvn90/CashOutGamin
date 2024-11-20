import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

class Matchmaking:
    def __init__(self, dataset):
        self.dataset = dataset

    def preprocess_data(self):
        # Preprocess the dataset by encoding categorical variables and scaling numerical variables
        self.dataset = pd.get_dummies(self.dataset, columns=['team1', 'team2'])
        self.dataset['score'] = self.dataset['score'].astype('float')

    def split_data(self):
        # Split the dataset into training and testing sets
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(self.dataset.drop('score', axis=1), self.dataset['score'], test_size=0.2, random_state=42)

    def train_model(self):
        # Train a random forest classifier on the training data
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.model.fit(self.X_train, self.y_train)

    def evaluate_model(self):
        # Evaluate the performance of the model on the testing data
        y_pred = self.model.predict(self.X_test)
        print('Accuracy:', accuracy_score(self.y_test, y_pred))

    def predict_match(self, team1, team2):
        # Use the trained model to predict the outcome of a match between two teams
        match_data = pd.DataFrame({'team1': [team1], 'team2': [team2]})
        match_data = pd.get_dummies(match_data, columns=['team1', 'team2'])
        prediction = self.model.predict(match_data)
        return prediction[0]