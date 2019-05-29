# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command


# Docker compose:

The database expose port is 3307 but in the networks of containers, database port is 3306.

To start Docker Compose:

```
docker-compose up -d
```