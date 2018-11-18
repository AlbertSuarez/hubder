CREATE USER hubder WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  PASSWORD 'felix-the-cat';


CREATE DATABASE hubder
    WITH
    OWNER = hubder
    ENCODING = 'utf8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default;


ALTER ROLE hubder IN DATABASE hubder SET search_path TO hubder;