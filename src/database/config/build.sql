BEGIN;

DROP TABLE IF EXISTS todos;
CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
  content TEXT,
  checked BOOLEAN DEFAULT false
);

COMMIT;