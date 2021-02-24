from django.db.models import Q
from django.shortcuts import render
from drf_yasg.utils import swagger_auto_schema
from rest_framework import mixins
from rest_framework import viewsets

# Create your views here.
from rest_framework.decorators import action

from app_common.app_constants import APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY
from customer_profile.models import CustomerInfo
from customer_profile.serializer import CustomerInfoSerializer
from rest_framework.response import Response
from rest_framework import status

import logging

LOGGER = logging.getLogger(__name__)


class CustomerProfileViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                             mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = CustomerInfo.objects.filter(~Q(id=APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY)).all()
    serializer_class = CustomerInfoSerializer
    filter_fields = serializer_class.Meta.fields

    # https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing
    @swagger_auto_schema(auto_schema=None)
    @action(detail=False, methods=['get'], url_path="get_all_customers", name='Get All Customers')
    def get_all_customers(self, request, pk=None):
        LOGGER.info("Enter")

        queryset = CustomerInfo.objects.all()
        serializer = CustomerInfoSerializer(queryset, many=True, context={'request': request})
        data = serializer.data

        LOGGER.info("Exit")
        return Response(data={'count': len(data), 'results': data}, status=status.HTTP_200_OK)
