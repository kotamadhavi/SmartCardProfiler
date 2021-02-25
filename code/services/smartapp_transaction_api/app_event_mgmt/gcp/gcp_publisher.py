class GCPPublisher:

    def publish_message(project_id:str ="smartapp_card_profiler",
                         topic_id:str="smartapp_card_transaction", event_info:dict = {}):
        from google.cloud import pubsub_v1
        publisher = pubsub_v1.PublisherClient()

        topic_path = publisher.topic_path(project_id, topic_id)
        future = publisher.publish(topic_path, event_info)
        print(future.result())