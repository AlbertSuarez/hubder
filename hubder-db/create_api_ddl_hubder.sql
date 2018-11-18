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
    project_id character varying(100) NOT NULL COLLATE pg_catalog."default",
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
        ON DELETE NO ACTION,
    CONSTRAINT hubder_match_project_id_fkey FOREIGN KEY (project_id)
        REFERENCES hubder_project (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE hubder_match
    OWNER to hubder;


insert into hubder_user values ('albert', 'Albert', 'Suarez', 'Student', 'Software', 'albert@gmail.com', '72d0166b5707d129dc321e56692fe454c034552ee9e2b38f5a7f1c1306a632ea');
insert into hubder_user values ('felix', 'Felix', 'Arribas', 'Student', 'Software', 'felix@gmail.com', '960f984285701c6d8dba5dc71c35c55c0397ff276b06423146dde88741ddf1af');
insert into hubder_user values ('carlota', 'Carlota', 'Catot', 'Student', 'Software', 'carlota@gmail.com', '332b7c12e4832aa8241acb324f2deaa4cac7a522243d1f078259fac18873bcce');
insert into hubder_user values ('ferran', 'Ferran', 'Velasco', 'Student', 'Computer Science', 'ferran@gmail.com', 'c51bf0331300b766ff0e19291d1948d6cca2dd9aee5eaacb54662f380b6bbed6');
insert into hubder_user values ('xavi', 'Xavier', 'Alaman', 'Student', 'Computer Science', 'xavi@gmail.com', '6c9efbcfaaec55a45765043f54b1e64d26075503134f61f6aa0c918a798d9376');
insert into hubder_user values ('laura', 'Laura', 'Perez', 'Student', 'Hardware', 'laura@gmail.com', '5d702eb07928ed7b84626b777c86c39bf4cb403d4024f031d5f97a4b0664421f');
insert into hubder_user values ('victor', 'Victor', 'Sanchez', 'Student', 'Computer Science', 'victor@gmail.com', '99bde068af2d49ed7fc8b8fa79abe13a6059e0db320bb73459fd96624bb4b33f');
insert into hubder_user values ('bernat', 'Bernat', 'Torres', 'Student', 'Computer Science', 'bernat@gmail.com', '4e975fef8a8daa3eb85464d79d2292e0e7719ffd51dfd6d6ea6dda7ce9026635');

insert into hubder_user values ('carme', 'Carme', 'Quer', 'Teacher', 'Software', 'carme@upc.edu', 'fc7b4d8034b04a6506874fc0e510aeaace6865c2c09ead1b3cb8d739e245d0a1');
insert into hubder_user values ('ernest', 'Ernest', 'Teniente', 'Coordinator', 'Software', 'ernest@upc.edu', '61a3c22a310f6b6328941b54bab34d646e3ccd15a67504c7403ddef7d80f0e43');
insert into hubder_user values ('jordi', 'Jordi', 'Delgado', 'Teacher', 'Software', 'jordi@upc.edu', '707d11765de821e5bd52bfc135ce9e1e0400f6aabad78a0cdb4543dc22669e49');
insert into hubder_user values ('marc', 'Marc', 'Alié', 'Teacher', 'Software', 'marc@upc.edu', '4697c20f8a70fcad6323e007d553cfe05d4433f81be70884ea3b4834b147f4c1');
insert into hubder_user values ('mariajose', 'Maria Jose', 'Cassany', 'Teacher', 'Software', 'mariajose@upc.edu', 'dd5b32c15fc56be8570bd485aa6baccd685384bd03c9fe947a510376cc4978a6');
insert into hubder_user values ('petit', 'Jordi', 'Petit', 'Coordinator', 'Computer Science', 'petit@upc.edu', '8e3cefcb3c22369aad72eb9c22a0d0292c0640f01dfe2d6eb2827b4e5baa4deb');
insert into hubder_user values ('javier', 'Javier', 'Bejar', 'Teacher', 'Computer Science', 'javier@upc.edu', '384dac3368de6f658d7bc66e8fd4c8206b91c17a9084498948c7dd6e44d4a055');
insert into hubder_user values ('robert', 'Robert', 'Nieuwenhuis', 'Teacher', 'Computer Science', 'robert@upc.edu', '4007d46292298e83da10d0763d95d5139fe0c157148d0587aa912170414ccba6');
insert into hubder_user values ('rubio', 'Albert', 'Rubio', 'Teacher', 'Computer Science', 'rubio@upc.edu', '00aa47c8a6ebbddedd75ae2522724ac4573c01791c7028d7a0622fa0ad06ce3f');
insert into hubder_user values ('maria', 'Maria', 'Alvarez', 'Teacher', 'Computer Science', 'maria@upc.edu', '94aec9fbed989ece189a7e172c9cf41669050495152bc4c1dbf2a38d7fd85627');
insert into hubder_user values ('angel', 'Angel', 'Olive', 'Coordinator', 'Hardware', 'angel@upc.edu', '519ba91a5a5b4afb9dc66f8805ce8c442b6576316c19c6896af2fa9bda6aff71');
insert into hubder_user values ('enric', 'Enric', 'Martin', 'Teacher', 'Hardware', 'enric@upc.edu', 'e567d739ae47eb4f9d8020cacd10142bf7c8d2462c0ba75e06cc0cb0328a6b18');
insert into hubder_user values ('josemaria', 'Jose Maria', 'Llaberia', 'Teacher', 'Hardware', 'josemaria@upc.edu', '5e333237b87718565f22dbdad8b8b847ec060875c008ce61972e3e68e9dce946');

insert into hubder_project values ('79498486-69b2-4fc1-8df8-8733b53eea94', 'Wisebite', '* Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.  Cras consequat.\n* Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,  accumsan porttitor, facilisis luctus, metus.\n* Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a,  sodales sit amet, nisi.\n* Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.', 'android,software,app', 'albert');
insert into hubder_project values ('801bdb20-16a9-4fdd-a8b6-eca7d45f6112', 'Skywork', '1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n2. Aliquam tincidunt mauris eu risus.\n3. Vestibulum auctor dapibus neque.', 'ios,love,app', 'felix');

insert into hubder_like values ('676f651a-2ea3-4309-a251-f43e47b061c3', 'albert', 'ernest');
insert into hubder_like values ('6df775d2-6755-43c9-8d9a-4ae827751c1b', 'carme', 'felix');
insert into hubder_like values ('b38d0d77-350c-4b25-9ed7-c20bf28eb637', 'felix', 'carme');

insert into hubder_match values ('fa21253c-a025-4770-a284-db9d9e521d7f', 'felix', 'carme', '801bdb20-16a9-4fdd-a8b6-eca7d45f6112', 'Software', default);