# facedetector-api
Face Detection Application Back-End

Face Detection Application detect if an image contains human faces and coordinate locations of where those face appear with a bounding box, recognize faces from any angle with landmarks and alignment

Deployment
Front-End: https://facedetector-s.herokuapp.com/
Back-End: https://intense-fjord-48595.herokuapp.com/


Database Schema:
create table users (
	id serial primary key,
	name varchar(100),
	email text unique not null,
	entries bigint default 0,
	joined timestamp not null
);

create table login (
	id serial primary key,
	hash varchar(100) not null,
	email text unique not null
);

Note: It doesn't save any information of pictures, only user information is stored.
