from app_event_mgmt.gcp.gcp_publisher import GCPPublisher


class PublishManager:

    def __init__(self):
        self.gcp_pubsub = GCPPublisher()

    def publish_message(self, event_info:dict, event_tech_type = "gcp_pubsub") -> dict:
        event_result = {}

        if event_tech_type == "gcp_pubsub":
            self.gcp_pubsub.publish_message(event_info=event_info)

        return event_result

