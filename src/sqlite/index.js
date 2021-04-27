import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const openDb = () =>
  open({
    filename: './src/sqlite/db.db',
    driver: sqlite3.Database,
  });

export default openDb;
