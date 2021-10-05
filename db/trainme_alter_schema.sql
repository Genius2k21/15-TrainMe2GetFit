USE DATABASE trainme_db;

DROP PROCEDURE sp_getUser;

CREATE PROCEDURE `sp_getUser`(IN username VARCHAR(25), IN password VARCHAR(25))
BEGIN
	SELECT id as 'user_id'
    FROM user 
    WHERE username = username
    AND password = password;
END