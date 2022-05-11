from dataclasses import fields
from pyexpat import model
from unicodedata import category
from rest_framework import serializers
from core.models import Item


class ItemSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    label = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = '__all__'

    def get_category(self, obj):
        return obj.get_category_display()

    def get_label(self, obj):
        return obj.get_label_display()
