# Docker Instructions (Linux)

## Building image

`docker build -t distributed_systems_frontend .`

## Running backend

### NOTE: The database and backend need to be running before the frontend.

`docker run -d --rm --name distributed_systems_frontend --network host distributed_systems_frontend:latest
`

