# Generated by Django 3.1.7 on 2021-02-24 22:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customer_transactions', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CardTransactionPredictEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_on', models.DateTimeField(auto_created=True, auto_now_add=True, db_column='updated_on', null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True, db_column='created_on', null=True)),
                ('created_by', models.IntegerField(db_column='created_by', default=100, null=True)),
                ('updated_by', models.IntegerField(db_column='updated_by', default=100, null=True)),
                ('status', models.CharField(db_column='status', max_length=50, null=True)),
                ('customer_id', models.IntegerField(db_column='customer_id')),
                ('event_date', models.DateTimeField(db_column='event_date', null=True)),
                ('event_technology_type', models.CharField(db_column='event_technology_type', max_length=100)),
                ('card_transaction_id', models.ForeignKey(db_column='card_transaction_id', on_delete=django.db.models.deletion.DO_NOTHING, to='customer_transactions.cardtransactioninfo')),
            ],
            options={
                'db_table': 'card_transaction__predict_event',
            },
        ),
    ]
