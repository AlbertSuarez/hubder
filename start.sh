#!/usr/bin/env bash
docker-compose up -d --build
docker run -it --rm --network hubder hubder_hubder-db psql -h hubder-db -U postgres postgres -f /tmp/create_api_ddl_base.sql
docker run -it --rm --network hubder hubder_hubder-db psql -h hubder-db -U   hubder   hubder -f /tmp/create_api_ddl_hubder.sql