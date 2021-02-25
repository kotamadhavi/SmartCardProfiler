import logging
from datetime import datetime

from django.db.models import Q
from django.shortcuts import get_object_or_404
from django.utils.timezone import make_aware
from drf_yasg.utils import swagger_auto_schema
from rest_framework import mixins
from rest_framework import status
from rest_framework import viewsets
# Create your views here.
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

from app_common.app_constants import APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY
from customer_transactions.models import CardTransactionInfo, CardTransactionPredictEvent
from customer_transactions.serializer import CardTransactionInfoSerializer, CardTransactionPredictEventSerializer

LOGGER = logging.getLogger(__name__)


class CardTransactionInfoViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                             mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = CardTransactionInfo.objects.filter(~Q(id=APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY)).all()
    serializer_class = CardTransactionInfoSerializer
    filter_fields = serializer_class.Meta.fields

    # https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing
    @swagger_auto_schema(auto_schema=None)
    @action(detail=False, methods=['get'], url_path="get_all_card_transactions", name='Get All Card Transactions')
    def get_all_card_transactions(self, request, pk=None):
        LOGGER.info("Enter")

        queryset = CardTransactionInfo.objects.all()
        serializer = CardTransactionInfoSerializer(queryset, many=True, context={'request': request})
        data = serializer.data

        LOGGER.info("Exit")
        return Response(data={'count': len(data), 'results': data}, status=status.HTTP_200_OK)


class CreateCardTransactionPredictEventViewSet(APIView):

    def get(self, request):
        LOGGER.info("Enter GET")

        data = None

        LOGGER.info("Exit")
        return Response(data={'results': [data]}, status=status.HTTP_200_OK)

    def post(self, request):
        LOGGER.info("Enter")

        print("request.query_params " + str(request.query_params));

        pk = request.query_params["cardpk"]
        print("pk " + pk)
        data = None

        if pk:
            a_card_transaction_info = CardTransactionInfo.objects.get(pk=pk)
            if a_card_transaction_info:
                card_tx_predidt_event = CardTransactionPredictEvent()
                card_tx_predidt_event.card_transaction_id = a_card_transaction_info
                card_tx_predidt_event.customer_id = a_card_transaction_info.customer_id
                card_tx_predidt_event.event_date = make_aware(datetime.now())
                card_tx_predidt_event.event_technology_type = "gcp-pubsub"
                card_tx_predidt_event.save(force_insert=True)
                serializer = CardTransactionInfoSerializer(a_card_transaction_info, many=False,
                                                           context={'request': request})
                data = serializer.data

        LOGGER.info("Exit")
        return Response(data={'results': [data]}, status=status.HTTP_200_OK)


class CardTransactionPredictEventViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                                               mixins.RetrieveModelMixin, mixins.UpdateModelMixin,viewsets.GenericViewSet):
    queryset = CardTransactionPredictEvent.objects.filter(~Q(id=APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY)).all()
    serializer_class = CardTransactionPredictEventSerializer
    filter_fields = serializer_class.Meta.fields