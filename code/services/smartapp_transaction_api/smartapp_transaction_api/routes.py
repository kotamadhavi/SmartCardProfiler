from rest_framework import routers

from customer_transactions.views import CardTransactionInfoViewSet


class CustomAPIRootView(routers.APIRootView):

    def get_view_name(self):
        return 'SmartApp Customer Transactions API'

    pass


class CustomRouter(routers.DefaultRouter):
    APIRootView = CustomAPIRootView


customer_transactions_router = CustomRouter()
customer_transactions_router.register(r'cards', CardTransactionInfoViewSet)
