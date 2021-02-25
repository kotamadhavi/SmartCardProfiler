import time
import json

class GCPPublisher:

    def publish_message(self, event_info: dict = {},project_id: str = "smartapp_card_profiler",
                        topic_id: str = "e") :
        from google.cloud import pubsub_v1
        publisher = pubsub_v1.PublisherClient()

        topic_path = publisher.topic_path(project_id, topic_id)

        futures = dict()

        def get_callback(f, data):
            def callback(f):
                try:
                    print(f.result())
                    futures.pop(data)
                except:  # noqa
                    print("Please handle {} for {}.".format(f.exception(), data))

            return callback

        futures.update({1: None})
        user_encode_data = json.dumps(event_info, indent=2).encode('utf-8')
        # When you publish a message, the client returns a future.
        future = publisher.publish(topic_path, user_encode_data)
        futures[1] = future

        # Publish failures shall be handled in the callback function.
        future.add_done_callback(get_callback(future, event_info))
        # Wait for all the publish futures to resolve before exiting.
        while futures:
            time.sleep(5)

        print(f"Published messages with error handler to {topic_path}.")
