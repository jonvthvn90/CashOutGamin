import pandas as pd
import numpy as np

class DataIoT:
    def __init__(self):
        self.data = pd.read_csv('data/iot.csv')

    def process_data(self):
        # Process the data
        self.data = self.data.dropna()  # Drop any rows with missing values
        self.data = self.data.astype({'column1': int, 'column2': float})  # Convert data types

    def analyze_data(self):
        # Analyze the data
        mean_value = self.data['column1'].mean()
        std_dev = self.data['column1'].std()
        print(f'Mean value: {mean_value}')
        print(f'Standard deviation: {std_dev}')

    def visualize_data(self):
        # Visualize the data
        import matplotlib.pyplot as plt
        plt.plot(self.data['column1'])
        plt.show()

# Create an instance of the DataIoT class
data_iot = DataIoT()
data_iot.process_data()
data_iot.analyze_data()
data_iot.visualize_data()