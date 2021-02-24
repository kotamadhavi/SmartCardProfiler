
``` sh
pip install -r requirements.txt

python manage.py startapp masterdata
python manage.py startapp transactions
python manage.py startapp predictions

python manage.py makemigrations masterdata  transactions  predictions
python manage.py migrate

python manage.py runnserver

```
