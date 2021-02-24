from rest_framework import routers

from customer_profile.views import CustomerProfileViewSet


class CustomAPIRootView(routers.APIRootView):

    def get_view_name(self):
        return 'SmartApp Master Data API'

    pass


class CustomRouter(routers.DefaultRouter):
    APIRootView = CustomAPIRootView


masterdata_router = CustomRouter()
masterdata_router.register(r'customer-profile', CustomerProfileViewSet)
