
``` sh
pip install -r requirements.txt

python manage.py startapp customer_profile
python manage.py startapp customer_transactions
python manage.py startapp customer_predictions

python manage.py makemigrations customer_profile  customer_transactions  customer_predictions
python manage.py migrate

python manage.py runnserver

```
