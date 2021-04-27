/* eslint-disable no-console */
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { join } = require('path');

const openDb = async () =>
  open({
    filename: join(__dirname, './sqlite/db.db'),
    driver: sqlite3.Database,
  });

async function setup() {
  const db = await openDb();

  await db.exec('INSERT INTO todos(id,content,checked) values(3,"hello",0)');
  const todos = await db.all('SELECT * from Todos');
  console.log(todos);
}

setup();
