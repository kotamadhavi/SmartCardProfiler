from django.db import models

from app_common.models import AppDomainAudited


class CardTransactionInfo(AppDomainAudited):
    customer_id = models.IntegerField(db_column="customer_id", null=False)
    card_value = models.FloatField(db_column="card_value", null=False)
    transaction_date = models.DateTimeField(db_column="transaction_date", null=True)

    def __str__(self):
        return str(self.customer_id)

    class Meta:
        db_table = 'card_transaction_info'


class CardTransactionPredictEvent(AppDomainAudited):
    customer_id = models.IntegerField(db_column="customer_id", null=False)
    card_transaction_id = models.ForeignKey(CardTransactionInfo, on_delete=models.DO_NOTHING,
                                              db_column="card_transaction_id", null=False)
    event_date = models.DateTimeField(db_column="event_date", null=True)
    # GCP or AWS or Kafka or Azure any other technology possible values
    event_technology_type = models.CharField(db_column="event_technology_type", null=False, max_length=100)

    def __str__(self):
        return str(self.card_transaction_id)

    class Meta:
        db_table = 'card_transaction_predict_event'