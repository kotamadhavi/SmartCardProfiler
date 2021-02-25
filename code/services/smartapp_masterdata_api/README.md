
1. Added Python dependencies in requirements.txt
   - a) Added .gitignore file in this Python project too

``` sh

pip install -r requirements.txt

python manage.py startapp customer_profile
python manage.py startapp customer_transactions
python manage.py startapp customer_predictions

python manage.py makemigrations customer_profile  customer_transactions  customer_predictions
python manage.py migrate

python manage.py runserver

```

2. Added following in settings.py
'corsheaders',
'rest_framework',
'drf_yasg',
'django_filters',
'django_mysql',

3. Created CustomerInfo class in customer_profile/models.py
4. Created routers.py in smartapp_masterdata_api folder
5. Updated smartapp_masterdata_api/urls.py to include above routers.py
6. Created folders 01-project-setup/01-initial-data/01-customer
7. Populated JSON file customer_profiles_data.json
8. python manage.py loaddata ./01-project-setup/01-initial-data/01-customer/customer_profiles_data.json

