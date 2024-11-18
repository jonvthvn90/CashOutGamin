import pandas as pd

def predict(model, data):
    predictions = model.predict(data)
    return predictions