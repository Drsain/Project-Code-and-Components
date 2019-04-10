#!/bin/bash

export PGPASSWORD='change this to your postgres password'

echo "Configuring database"

dropdb -U postgres project
createdb -U postgres project


psql -U postgres project < ./bin/sql/account.sql

echo "finished"