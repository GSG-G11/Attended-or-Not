BEGIN ;

DROP TABLE IF EXISTS  members , program CASCADE ;


CREATE TABLE program (
    id serial PRIMARY KEY ,
    time int ,
    num_session int ,
    name VARCHAR(50) NOT NULL 
);

CREATE TABLE members (
    id serial PRIMARY KEY ,
    name VARCHAR(50) NOT NULL ,
    phone int ,
    date date NOT NULL ,
    program_id INT	REFERENCES program(id) ON UPDATE CASCADE

);



COMMIT ;