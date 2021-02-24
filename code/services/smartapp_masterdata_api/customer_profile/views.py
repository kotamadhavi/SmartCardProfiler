from django.db.models import Q
from django.shortcuts import render
from rest_framework import mixins
from rest_framework import viewsets

# Create your views here.
from app_common.app_constants import APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY
from customer_profile.models import CustomerInfo
from customer_profile.serializer import CustomerInfoSerializer



class CustomerProfileViewSet(mixins.CreateModelMixin,
                          mixins.ListModelMixin,
                          mixins.RetrieveModelMixin,
                          mixins.UpdateModelMixin,
                          viewsets.GenericViewSet
):
    queryset = CustomerInfo.objects.filter(~Q(id = APP_DOMAIN_SYSTEM_RECORD_PRIMARY_KEY)).all()
    serializer_class = CustomerInfoSerializer
    filter_fields = serializer_class.Meta.fields
