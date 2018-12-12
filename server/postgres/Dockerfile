FROM postgres:10.3

#add tables folder to docker. all the sql files in the folder will be executed by deploy_schema.sql
ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seed/ /docker-entrypoint-initdb.d/seed/
#copy deploy file to docker
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/
