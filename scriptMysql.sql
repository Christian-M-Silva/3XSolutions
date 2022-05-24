CREATE TABLE user_schama.user(
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password_user VARCHAR(45) NOT NULL);

CREATE SCHEMA user_schama;