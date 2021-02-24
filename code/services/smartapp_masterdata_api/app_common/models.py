from jsonfield import JSONField
from django.db import models
from app_common.app_constants import *


class AppDomainAudited(models.Model):
    created_on = models.DateTimeField(db_column="created_on", auto_now_add=True, null=True)
    updated_on = models.DateTimeField(db_column="updated_on", auto_created=True, auto_now_add=True, null=True)
    created_by = models.IntegerField(db_column="created_by", null=True, default=APP_DOMAIN_DEFAULT_CREATED_BY)
    updated_by = models.IntegerField(db_column="updated_by", null=True, default=APP_DOMAIN_DEFAULT_UPDATED_BY)
    status = models.CharField(db_column="status", null=True, max_length=50)

    class Meta:
        abstract = True
        ordering = APP_DOMAIN_DEFAULT_ORDER_BY_FIELDS
