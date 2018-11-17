CREATE SCHEMA hubder AUTHORIZATION hubder;

CREATE TABLE hubder_user
(
    username character varying(100) NOT NULL COLLATE pg_catalog."default"
    first_name character varying(100) COLLATE pg_catalog."default",
    last_name character varying(100) COLLATE pg_catalog."default",
    account_type character varying(100) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    password character varying(500) COLLATE pg_catalog."default",
    CONSTRAINT hubder_user_pkey PRIMARY KEY (username)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE hubder_user
    OWNER to hubder;