from django.urls import path, include
from rest_framework import routers
from restapi.views import MealViewSet, IngredientViewSet

meals_router = routers.SimpleRouter()
meals_router.register(
    r'meals',
    MealViewSet,
    basename='meal',
)

ingredients_router = routers.SimpleRouter()
ingredients_router.register(
    r'ingredients',
    IngredientViewSet,
    basename='ingredient',
)

urlpatterns = [
    # Admin routes are registered here

    # API
    path('api/', include(meals_router.urls)),
    path('api/', include(ingredients_router.urls))
]
