from models.trainModel.model import recommend_hotels_with_name


recommended_hotels = recommend_hotels_with_name('Shafakat Boys Hostel', n_recommendations=3)
print("Recommended Hotels:")
print(recommended_hotels)
