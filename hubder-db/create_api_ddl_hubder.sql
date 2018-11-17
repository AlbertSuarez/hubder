CREATE SCHEMA hubder AUTHORIZATION hubder;

CREATE TABLE hubder_user
(
    username character varying(100) NOT NULL COLLATE pg_catalog."default",
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


CREATE TABLE hubder_project
(
    id character varying(100) NOT NULL COLLATE pg_catalog."default",
    title character varying(100) COLLATE pg_catalog."default",
    description character varying(100) COLLATE pg_catalog."default",
    tags character varying(100) COLLATE pg_catalog."default",
    project_username character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT hubder_project_pkey PRIMARY KEY (id),
    CONSTRAINT hubder_project_username_fkey FOREIGN KEY (project_username)
        REFERENCES hubder_user (username) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE hubder_project
    OWNER to hubder;



insert into hubder_user values ('alsumo95', 'Albert', 'Suarez', 'Student', 'alsumo95@gmail.com', 'absdfbsajfbaosebrob72364h45g43');

insert into hubder_project values ('sadf5fd1fd18', 'Wisebite', 'Best project ever', 'android,software,app', 'alsumo95');
