# SmartCardProfiler

## Project set up
py -m pip install --user virtualenv


### Creating & activating virtual environment
py -m venv SmartCardProfiler_venv

cd [path]SmartCardProfiler\code\services
\madhavi\python_venvs\SmartCardProfiler_venv\Scripts\activate

### django install, need to install in an venv, created as above.
python -m pip install Django

### django needs to be created one per micro service
django project creation
https://docs.djangoproject.com/en/3.1/intro/tutorial01/

django-admin startproject smartapp_masterdata_api
django-admin startproject smartapp_prediction_api
django-admin startproject smartapp_transaction_api

### git commands
git add .
git commit -m " comment"
git push

