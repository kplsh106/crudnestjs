userdatabase=# \d+ username;
                                                  Table "public.username"
  Column   |          Type          | Collation | Nullable | Default | Storage  | Compression | Stats target | Description 
-----------+------------------------+-----------+----------+---------+----------+-------------+--------------+-------------
 id        | integer                |           | not null |         | plain    |             |              | 
 active    | boolean                |           | not null |         | plain    |             |              | 
 password  | character varying(100) |           | not null |         | extended |             |              | 
 roles     | character varying(255) |           | not null |         | extended |             |              | 
 user_name | character varying(255) |           | not null |         | extended |             |              | 
Indexes:
    "username_pkey" PRIMARY KEY, btree (id)
Access method: heap


