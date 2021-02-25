from rest_framework import serializers

from customer_transactions.models import CardTransactionInfo, CardTransactionPredictEvent


class CardTransactionInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CardTransactionInfo
        fields = '__all__'


class CardTransactionPredictEventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CardTransactionPredictEvent
        fields = '__all__'
