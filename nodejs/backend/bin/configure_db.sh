#!/bin/bash

export PGPASSWORD='change this to your postgres password'

echo "Configuring database"

dropdb -U postgres change_this_to_your_database_name
createdb -U postgres change_this_to_your_database_name


psql -U postgres change_this_to_your_database_name < ./bin/sql/account.sql

echo "finished"