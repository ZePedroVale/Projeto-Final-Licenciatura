from django.shortcuts import render
from rest_framework import viewsets
from .models import Meal
from .serializers import MealSerializer
from .models import Ingredient
from .serializers import IngredientSerializer


class MealViewSet(viewsets.ModelViewSet):
    serializer_class = MealSerializer
    queryset = Meal.objects.all()


class IngredientViewSet(viewsets.ModelViewSet):
    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()
