
# Smart Card Profiler - Card Transactions Microservice

This Django App runs on port no 8001 and this is changed in manage.py file of this project 

```sh

python manage.py startapp customer_transactions

python manage.py makemigrations customer_transactions
python manage.py migrate

python  manage.py runserver

#  http://127.0.0.1:8001/

```

python manage.py loaddata ./01-project-setup/01-initial-data/01-customer-card-tx/customer_card_transactions_data.json