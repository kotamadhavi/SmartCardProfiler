from app_event_mgmt.gcp.gcp_publisher import GCPPublisher
from django.conf import settings


class PublishManager:

    def __init__(self):
        self.gcp_pubsub = GCPPublisher()

    def publish_card_transaction_event_message(self, event_info: dict, event_tech_type="gcp_pubsub",
                                               project_id: str = None, topic_id: str = None) -> dict:
        event_result = {}

        if event_tech_type == "gcp_pubsub":
            project_id = settings.GCP_PUBSUB_PROJECT_ID
            topic_id = settings.GCP_PUBSUB_TOPIC_ID
            self.gcp_pubsub.publish_message(event_info=event_info, project_id=project_id, topic_id=topic_id)
        if event_tech_type == "aws_kinesis":
            # kinesis code here
            pass

        return event_result
