from models.trainModel.model2 import get_recommendations

recommended_hotels = get_recommendations(27.713067,85.34542119999999,1000,'IT' )
print("Recommended Hotels:")
print(recommended_hotels)
