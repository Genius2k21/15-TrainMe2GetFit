USE trainme_db;

DROP PROCEDURE IF EXISTS sp_getUser;

DELIMITER //
CREATE PROCEDURE `sp_getUser`(IN passedname VARCHAR(25), IN passedPassword VARCHAR(25))
BEGIN
	SELECT id as 'user_id'
    FROM user 
    WHERE username = passedname
    AND password = passedPassword;
END //
DELIMITER  ;


DROP PROCEDURE sp_getClient;

DELIMITER //
CREATE PROCEDURE `sp_getClient`(IN userid INT, IN clientid INT)
BEGIN
	SELECT * FROM client 
    WHERE id = clientid 
    AND user_id = userid;
END //
DELIMITER ;