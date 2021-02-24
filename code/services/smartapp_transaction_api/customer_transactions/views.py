from django.db.models import Q
from drf_yasg.utils import swagger_auto_schema
from rest_framework import mixins
from rest_framework import viewsets

# Create your views here.
from rest_framework.decorators import action

from app_common.app_constants import APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY
from rest_framework.response import Response
from rest_framework import status

import logging

from customer_transactions.models import CardTransactionInfo
from customer_transactions.serializer import CardTransactionInfoSerializer

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
