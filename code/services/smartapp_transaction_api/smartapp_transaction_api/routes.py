from rest_framework import routers


class CustomAPIRootView(routers.APIRootView):

    def get_view_name(self):
        return 'SmartApp Customer Transactions API'

    pass


class CustomRouter(routers.DefaultRouter):
    APIRootView = CustomAPIRootView


customer_transactions_router = CustomRouter()
# customer_transactions_router.register(r'customer-card-transaction', CustomerProfileViewSet)
