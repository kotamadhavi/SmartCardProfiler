from rest_framework import serializers

from customer_profile.models import CustomerInfo


class CustomerInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomerInfo
        fields = '__all__'

