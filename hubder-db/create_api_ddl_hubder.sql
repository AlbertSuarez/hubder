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
    description character varying(2000) COLLATE pg_catalog."default",
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
    description character varying(2000) COLLATE pg_catalog."default",
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


insert into hubder_user values ('albert', 'Albert', 'Suarez', 'Student', 'Software Engineering', 'albert@gmail.com', '72d0166b5707d129dc321e56692fe454c034552ee9e2b38f5a7f1c1306a632ea', '# What is Lorem Ipsum? \n  \n It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of *letters*.');
insert into hubder_user values ('felix', 'Felix', 'Arribas', 'Student', 'Software Engineering', 'felix@gmail.com', '960f984285701c6d8dba5dc71c35c55c0397ff276b06423146dde88741ddf1af', '# Where does it come from? \n  \n Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.');
insert into hubder_user values ('carlota', 'Carlota', 'Catot', 'Student', 'Software Engineering', 'carlota@gmail.com', '332b7c12e4832aa8241acb324f2deaa4cac7a522243d1f078259fac18873bcce');
insert into hubder_user values ('ferran', 'Ferran', 'Velasco', 'Student', 'Computer Science', 'ferran@gmail.com', 'c51bf0331300b766ff0e19291d1948d6cca2dd9aee5eaacb54662f380b6bbed6');
insert into hubder_user values ('xavi', 'Xavier', 'Alaman', 'Student', 'Computer Science', 'xavi@gmail.com', '6c9efbcfaaec55a45765043f54b1e64d26075503134f61f6aa0c918a798d9376');
insert into hubder_user values ('laura', 'Laura', 'Perez', 'Student', 'Hardware', 'laura@gmail.com', '5d702eb07928ed7b84626b777c86c39bf4cb403d4024f031d5f97a4b0664421f', '# Test \n  \n "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."');
insert into hubder_user values ('victor', 'Victor', 'Sanchez', 'Student', 'Computer Science', 'victor@gmail.com', '99bde068af2d49ed7fc8b8fa79abe13a6059e0db320bb73459fd96624bb4b33f');
insert into hubder_user values ('bernat', 'Bernat', 'Torres', 'Student', 'Computer Science', 'bernat@gmail.com', '4e975fef8a8daa3eb85464d79d2292e0e7719ffd51dfd6d6ea6dda7ce9026635');

insert into hubder_user values ('carme', 'Carme', 'Quer', 'Professor', 'Software Engineering', 'carme@upc.edu', 'fc7b4d8034b04a6506874fc0e510aeaace6865c2c09ead1b3cb8d739e245d0a1');
insert into hubder_user values ('ernest', 'Ernest', 'Teniente', 'Coordinator', 'Software Engineering', 'ernest@upc.edu', '61a3c22a310f6b6328941b54bab34d646e3ccd15a67504c7403ddef7d80f0e43');
insert into hubder_user values ('jordi', 'Jordi', 'Delgado', 'Professor', 'Software Engineering', 'jordi@upc.edu', '707d11765de821e5bd52bfc135ce9e1e0400f6aabad78a0cdb4543dc22669e49');
insert into hubder_user values ('marc', 'Marc', 'Alié', 'Professor', 'Software Engineering', 'marc@upc.edu', '4697c20f8a70fcad6323e007d553cfe05d4433f81be70884ea3b4834b147f4c1');
insert into hubder_user values ('mariajose', 'Maria Jose', 'Cassany', 'Professor', 'Software Engineering', 'mariajose@upc.edu', 'dd5b32c15fc56be8570bd485aa6baccd685384bd03c9fe947a510376cc4978a6', '* "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. \n * No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"');
insert into hubder_user values ('petit', 'Jordi', 'Petit', 'Coordinator', 'Computer Science', 'petit@upc.edu', '8e3cefcb3c22369aad72eb9c22a0d0292c0640f01dfe2d6eb2827b4e5baa4deb', 'Clank helps you searching hospitals, pharmacies, and giving ambulance or expert information. Furthermore and more importantly, it gives you the possibility to do an extensive test to predict your actual mental state or another to predict if you will have mental status problems in the future because of bad routine habits.');
insert into hubder_user values ('javier', 'Javier', 'Bejar', 'Professor', 'Computer Science', 'javier@upc.edu', '384dac3368de6f658d7bc66e8fd4c8206b91c17a9084498948c7dd6e44d4a055', 'This is also just one way of thinking about it, and may not be practical in actually explaining yourself to someone in live conversation. Regardless of the perspective you take on selfishness though, I think its important to explain, however fits you best, that although they may see you that way, you are just a human being like everyone else trying to figure this thing out, and how you appear right now or how you act does not define who you are.');
insert into hubder_user values ('robert', 'Robert', 'Nieuwenhuis', 'Professor', 'Computer Science', 'robert@upc.edu', '4007d46292298e83da10d0763d95d5139fe0c157148d0587aa912170414ccba6', 'I am modest, but hard working and I consistently sets firm goals for myself.  Then, once Ive defined the benchmarks, I take the necessary steps to achieve those milestones.');
insert into hubder_user values ('rubio', 'Albert', 'Rubio', 'Professor', 'Computer Science', 'rubio@upc.edu', '00aa47c8a6ebbddedd75ae2522724ac4573c01791c7028d7a0622fa0ad06ce3f', 'Someone who thinks positively and who can execute on difficult tasks. Im not an individual who needs to be micro-managed. Rather, when given a specific task, I can figure out the best ways to solve the problem in an autonomous manner.');
insert into hubder_user values ('maria', 'Maria', 'Alvarez', 'Professor', 'Computer Science', 'maria@upc.edu', '94aec9fbed989ece189a7e172c9cf41669050495152bc4c1dbf2a38d7fd85627', '# Test \n  \n "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."');
insert into hubder_user values ('angel', 'Angel', 'Olive', 'Coordinator', 'Hardware', 'angel@upc.edu', '519ba91a5a5b4afb9dc66f8805ce8c442b6576316c19c6896af2fa9bda6aff71', 'I am someone who has an unwavering resolve. I am determined to do well in my job and am determined to have a successful career as well as make the company I work for more competitive.');
insert into hubder_user values ('enric', 'Enric', 'Martin', 'Professor', 'Hardware', 'enric@upc.edu', 'e567d739ae47eb4f9d8020cacd10142bf7c8d2462c0ba75e06cc0cb0328a6b18', 'I am someone who has been able to not only meet my employers expectations, but I would describe myself as a person who has consistently exceeded those markers.');
insert into hubder_user values ('josemaria', 'Jose Maria', 'Llaberia', 'Professor', 'Hardware', 'josemaria@upc.edu', '5e333237b87718565f22dbdad8b8b847ec060875c008ce61972e3e68e9dce946', '# Test \n  \n ## Test 1 \n  \n "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."');

insert into hubder_project values ('79498486-69b2-4fc1-8df8-8733b53eea94', 'Wisebite', '* Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.  Cras consequat. \n * Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,  accumsan porttitor, facilisis luctus, metus. \n * Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a,  sodales sit amet, nisi. \n * Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.', 'android,software,app', 'albert');
insert into hubder_project values ('801bdb20-16a9-4fdd-a8b6-eca7d45f6112', 'Skywork', '1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n 2. Aliquam tincidunt mauris eu risus. \n 3. Vestibulum auctor dapibus neque.', 'ios,love,app', 'felix');
insert into hubder_project values ('4a256913-cd14-43ca-9dea-6ecb0414660b', 'TENSORBLOCK.js', 'We are a group of math students and we love abstract and crazy ideas. We decided to develop this game as its a continous game that depends on diferent timelines.', 'blockchain,game,crazy', 'ferran');
insert into hubder_project values ('85172f05-7f78-4472-85bc-122589899bae', 'Decent Voting', 'Our system is has a decentralized architecture, therefore the trust and the availability of the system is distributed. It runs on fully on serverless services, which means that is easily scalable and resilient to failure. At the same time, the system guarantees the absolute privacy of electors, because the votes cannot be tracked to a single user and the results are not revealed until the time expires.', 'blockchain,vote,tech', 'xavi');
insert into hubder_project values ('80672c32-f93a-40ca-9b69-e9838c6a32da', 'Huddle', 'This idea came about during a project meeting I had in university. The project team had a lot of discussion and insights throughout the meeting, but realized at the end that we forgot to take down meeting minutes. This gave us the idea of creating a tool that will take speech input and record minutes on a collaborative platform that is commonly used amongst teams. After looking into the Trello API, the team decided that Trello would be the perfect platform to work with, as it can be updated in real-time and its usage is very intuitive.', 'trello,voice,app', 'laura');
insert into hubder_project values ('4e6ec8e3-e046-4f03-aef9-a545ba308488', 'Jobify', 'We use telegram as our communication app and we really like the powerful chatbots. Also we were looking for an easy way to look for a job and we think that this bot makes it a lot easier.', 'bot,job,telegram', 'victor');
insert into hubder_project values ('74cf342a-08ec-4856-9a52-2247693f3b78', 'BotherMeNot', 'Displaying graphics with an arduino wiring a display, managing power (never used externally powered components) using Applescript piping data around', 'hardware,voice,app', 'bernat');

insert into hubder_project values ('16274b22-d1a2-438a-8f5d-685a9292d788', 'CityPlanner', 'With a growing world population, cities face several challenges. Planning and management has become more important than ever, and there is an increasing need for innovative solutions which provide new approaches to use the overwhelming amount of data these cities generate. When deciding where to place a new equipment on a city, taking into account all the city data is crucial to ensure an optimal placement. We decided to automatise this process and to being able to manage it in a visual way.', 'aws,smart-cities', 'carme');
insert into hubder_project values ('e041a635-aed1-4765-9a4c-81a02c8893c4', 'Neighborgood', 'We love social projects and we wanted to create one that would have a positive impact on the community. Recently some members of the team have had to look for a rental apartment in Barcelona, one of the main problems of the city. We realized the difficulty of renting a house in good condition for a fair price.', 'ai,smart-cities,app', 'ernest');
insert into hubder_project values ('7d821f79-368e-487e-889d-461aa3aae8c2', 'CommuBot', 'Commubot is a Telegram bot serving as a proof of concept for a public transportation disturbance alert system. The user is able to ask the bot for status on a specific trip, specifying origin and destination, or register his regular commute and request information on that. The bot also notifies users of newly added disturbances that affect his regular commute.', 'bot,telegram,app', 'jordi');
insert into hubder_project values ('03eb674b-066c-4bb0-8f41-eaf3ab5ba5f3', 'AINAD', 'Clank helps you searching hospitals, pharmacies, and giving ambulance or expert information. Furthermore and more importantly, it gives you the possibility to do an extensive test to predict your actual mental state or another to predict if you will have mental status problems in the future because of bad routine habits.', 'ai,bot,app', 'marc');

insert into hubder_like values ('676f651a-2ea3-4309-a251-f43e47b061c3', 'albert', 'ernest');
insert into hubder_like values ('6df775d2-6755-43c9-8d9a-4ae827751c1b', 'carme', 'felix');
insert into hubder_like values ('b38d0d77-350c-4b25-9ed7-c20bf28eb637', 'felix', 'carme');
insert into hubder_like values ('ee665699-7bed-4a5c-822f-6e23f0e1372f', 'mariajose', 'felix');
insert into hubder_like values ('89b49a0d-f8d1-43d9-87df-7767c9278056', 'felix', 'mariajose');

insert into hubder_match values ('fa21253c-a025-4770-a284-db9d9e521d7f', 'felix', 'carme', '801bdb20-16a9-4fdd-a8b6-eca7d45f6112', 'Software', default);
insert into hubder_match values ('a1a16895-ef0e-4dfc-9d79-4f49ae821417', 'felix', 'mariajose', '801bdb20-16a9-4fdd-a8b6-eca7d45f6112', 'Software', default);
