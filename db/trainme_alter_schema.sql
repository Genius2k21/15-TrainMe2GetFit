USE DATABASE trainme_db;

DROP PROCEDURE sp_getUser;

CREATE PROCEDURE `sp_getUser`(IN username VARCHAR(25), IN password VARCHAR(25))
BEGIN
	SELECT id as 'user_id'
    FROM user 
    WHERE username = username
    AND password = password;
END



DROP PROCEDURE IF EXISTS sp_getClient

CREATE PROCEDURE sp_getClient(IN userid INT, IN clientid INT)
BEGIN
	SELECT * FROM client 
    WHERE id = clientid 
    AND user_id = userid;
END 