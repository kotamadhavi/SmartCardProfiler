from django.db import models

from app_common.models import AppDomainAudited


class CardTransactionInfo(AppDomainAudited):
    customer_id = models.IntegerField(db_column="customer_id", null=False)
    card_value = models.FloatField(db_column="card_value", null=False)
    transaction_date = models.DateTimeField(db_column="transaction_date", null=True)

    def __str__(self):
        return self.customer_id

    class Meta:
        db_table = 'card_transaction_info'
