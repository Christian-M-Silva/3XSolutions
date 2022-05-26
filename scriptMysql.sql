CREATE DATABASE user_database;


CREATE TABLE user_database.user(
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password_user VARCHAR(45) NOT NULL
);

