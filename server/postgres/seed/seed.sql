BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) values ('Jessie','jessie@gmail.com',5,'2018-01-01');
--password 12345
INSERT INTO login (hash, email) values ('$2a$10$pjyXKhA/kxC.XOnqMv2uB.F7DdOwzwbIB35711TPiB0fNP9hjLqY6','jessie@gmail.com');
COMMIT;