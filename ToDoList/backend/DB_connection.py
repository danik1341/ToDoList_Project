import os
import psycopg2
from dotenv import load_dotenv


class DatabaseConnnector:
    def __init__(self):
        load_dotenv()
        # self.db_name = os.getenv("DB_NAME")
        # self.db_user = os.getenv("DB_USER")
        # self.db_password = os.getenv("DB_PASSWORD")
        # self.db_host = os.getenv("DB_HOST")
        # self.db_port = os.getenv("DB_PORT")
        self.conn = psycopg2.connect(
            dbname=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            host=os.getenv("DB_HOST"),
            port=os.getenv("DB_PORT")
        )

    def execute_query(self, query, data=None):
        cur = self.conn.cursor()
        cur.execute(query, data)
        self.conn.commit()
        cur.close()
        return data

    def close_connection(self):
        self.conn.close()
