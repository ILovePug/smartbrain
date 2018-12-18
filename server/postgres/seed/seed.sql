BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) values ('qian','qweng1577@gmail.com',5,'2018-01-01');
--password 12345
INSERT INTO login (hash, email) values ('$2a$10$pjyXKhA/kxC.XOnqMv2uB.F7DdOwzwbIB35711TPiB0fNP9hjLqY6','qweng1577@gmail.com');
COMMIT;