# facedetector-api
Face Detection Application Back-End

Face Detection Application *detect if an image contains human faces and coordinate locations of where those face appear with a bounding box, recognize faces from any angle with landmarks and alignment*

Front-End code is at https://github.com/skategaru/facedetector.git

**Dev runs on** <br />
**Front-End:** http://localhost:3000/ <br />
**Back-End:** http://localhost:3100/ <br />

**Database Schema** <br />
create table users (<br />
	id serial primary key,<br />
	name varchar(100),<br />
	email text unique not null,<br />
	entries bigint default 0,<br />
	joined timestamp not null<br />
);<br />

create table login (<br />
	id serial primary key,<br />
	hash varchar(100) not null,<br />
	email text unique not null<br />
);<br />


**Note:** It doesn't save any information of pictures, only user information is stored.