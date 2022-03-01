BEGIN ;

DROP TABLE IF EXISTS  members , program CASCADE ;

CREATE TABLE members (
    id serial PRIMARY KEY ,
    name VARCHAR(50) NOT NULL ,
    phone_number int ,
    date date NOT NULL 
);

CREATE TABLE program (
    id serial PRIMARY KEY ,
    name VARCHAR(50) NOT NULL ,
    members_id INT	REFERENCES members(id) ON UPDATE CASCADE 


);

COMMIT ;