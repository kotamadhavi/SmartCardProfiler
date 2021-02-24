from rest_framework import serializers

from customer_transactions.models import CardTransactionInfo


class CardTransactionInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CardTransactionInfo
        fields = '__all__'

