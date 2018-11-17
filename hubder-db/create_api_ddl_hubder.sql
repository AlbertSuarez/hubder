CREATE SCHEMA hubder AUTHORIZATION hubder;

CREATE TABLE hubder_user
(
    username character varying(100) NOT NULL COLLATE pg_catalog."default",
    first_name character varying(100) COLLATE pg_catalog."default",
    last_name character varying(100) COLLATE pg_catalog."default",
    account_type character varying(100) COLLATE pg_catalog."default",
    specialization character varying(100) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    password character varying(500) COLLATE pg_catalog."default",
    description character varying(500) COLLATE pg_catalog."default",
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
    description character varying(1000) COLLATE pg_catalog."default",
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


CREATE TABLE hubder_like
(
    id character varying(100) NOT NULL COLLATE pg_catalog."default",
    user_from character varying(100) NOT NULL COLLATE pg_catalog."default",
    user_to character varying(100) NOT NULL COLLATE pg_catalog."default",
    CONSTRAINT hubder_like_pkey PRIMARY KEY (id),
    CONSTRAINT hubder_like_user_from_fkey FOREIGN KEY (user_from)
        REFERENCES hubder_user (username) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT hubder_like_user_to_fkey FOREIGN KEY (user_to)
        REFERENCES hubder_user (username) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE hubder_like
    OWNER to hubder;


CREATE TABLE hubder_match
(
    id character varying(100) NOT NULL COLLATE pg_catalog."default",
    user_student character varying(100) NOT NULL COLLATE pg_catalog."default",
    user_teacher character varying(100) NOT NULL COLLATE pg_catalog."default",
    specialization character varying(100) NOT NULL COLLATE pg_catalog."default",
    status character varying(100) NOT NULL COLLATE pg_catalog."default" DEFAULT 'PENDING'::character varying,
    CONSTRAINT hubder_match_pkey PRIMARY KEY (id),
    CONSTRAINT hubder_match_user_student_fkey FOREIGN KEY (user_student)
        REFERENCES hubder_user (username) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT hubder_match_user_teacher_fkey FOREIGN KEY (user_teacher)
        REFERENCES hubder_user (username) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE hubder_match
    OWNER to hubder;


insert into hubder_user values ('alsumo95', 'Albert', 'Suarez', 'Student', 'Software', 'alsumo95@gmail.com', 'absdfbsajfbaosebrob72364h45g43');
insert into hubder_user values ('felixarpa', 'Felix', 'Arribas', 'Student', 'Software', 'felixarpa@gmail.com', 'glhljklhklj14514jhl');
insert into hubder_user values ('carlotacatot', 'Carlota', 'Catot', 'Student', 'Software', 'carlota@gmail.com', 'yrtyrtht411xcvxcv45');
insert into hubder_user values ('jpetit', 'Jordi', 'Petit', 'Teacher', 'Computer Science', 'jordi.petit@upc.edu', 'werwear451hjghmj45sgf');

insert into hubder_project values ('sadf5fd1fd18', 'Wisebite', 'Best project ever', 'android,software,app', 'alsumo95');

insert into hubder_like values ('fadf6787afd78af', 'alsumo95', 'jpetit');
insert into hubder_like values ('684yiouyoiuo45fsda', 'jpetit', 'felixarpa');
insert into hubder_like values ('asdfasdf4554asdf54', 'felixarpa', 'jpetit');

insert into hubder_match values ('fasd45asd45df45', 'felixarpa', 'jpetit', 'Software', default);