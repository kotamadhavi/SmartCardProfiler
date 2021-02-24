from django.db import models

from app_common.models import AppDomainAudited


class CustomerInfo(AppDomainAudited):
    first_name = models.CharField(db_column="first_name", null=False, max_length=50)
    last_name = models.CharField(db_column="last_name", null=False, max_length=50)
    email = models.CharField(db_column="email", null=False, max_length=50, unique=True)

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'customer_info'
