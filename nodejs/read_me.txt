before dtart the program you need to change some file.

	1:inside backend/secrets/databaseConfiguration.js
					update database_name and password for database_user_password


	2:inside backend/bin/configure_db.sh
					update database_name and password for database_user_password

if the database still not working you might need update database user setting.
	
		change the file:
			/etc/postgresql/10/main/pg_hba.conf

			the line 