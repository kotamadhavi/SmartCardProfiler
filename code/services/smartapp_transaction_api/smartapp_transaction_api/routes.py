from rest_framework import routers

from customer_transactions.views import CardTransactionInfoViewSet, CreateCardTransactionPredictEventViewSet, \
    CardTransactionPredictEventViewSet


class CustomAPIRootView(routers.APIRootView):

    def get_view_name(self):
        return 'SmartApp Customer Transactions API'

    pass


class CustomRouter(routers.DefaultRouter):
    APIRootView = CustomAPIRootView


customer_transactions_router = CustomRouter()
customer_transactions_router.register(r'cards', CardTransactionInfoViewSet)
# customer_transactions_router.register(r'create-card-predict-event', CreateCardTransactionPredictEventViewSet.as_view())
customer_transactions_router.register(r'cards-predict-events', CardTransactionPredictEventViewSet)
