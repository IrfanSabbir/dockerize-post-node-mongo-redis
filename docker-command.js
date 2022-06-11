/**
 * run the Docker build => docker build .
 * run ducker build with name => docker build -t nopde-app-image .
 * 
 * list of image => docker image ls
 * 
 * run a cintainer => docker run -d --name node-app node-app-image
 * 
 * 
 * view all container => docker ps
 * -------------------------------------
 * 
 * remove a container with container name => docker rm node-app -f(pass -fv to also remove anonymous volume)
 * 
 * 
 * run a docker container with port
 * -------------------------------------
 * 
 *  ==> docker run -p 3000:3000 -d --name node-app node-app-image
 * 
 *  docker volume list
 * -------------------------------------
 * 
 *  ==> docker volume ls
 * 
 * 
 *  docker logs
 * -------------------------------------
 * 
 *  ==> docker logs container name(node-app)
 * 
 * Pass other volume (bind mount) to sync between docker container and local changes(dev)
 * -------------------------------------
 * 
 *  ==> docker run -v %cd%:/app -p 3000:3000 -d --name node-app node-app-image
 *  ==> docker run -v {pwd}:/app -p 3000:3000 -d --name node-app node-app-image
 * 
 * 
 * 
 *  Pass other volume (anonymous) to not to touch node_module from container(dev)
 * -------------------------------------
 * 
 *  ==> docker run -v %cd%:/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image
 *  ==> docker run -v {pwd}:/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image
 * 
 * 
 * 
 *  Run docker with read only mode(dev)
 * -------------------------------------
 * 
 *  ==> docker run -v %cd%:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image
 *  ==> docker run -v {pwd}:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image
 * 
 * 
 * Run docker with env from terminal
 * -------------------------------------
 * 
 *  ==> docker run -v %cd%:/app:ro -v /app/node_modules --env PORT:3000 -p 3000:3000 -d --name node-app node-app-image
 *  ==> docker run -v {pwd}:/app:ro -v /app/node_modules --env PORT:3000 -p 3000:3000 -d --name node-app node-app-image
 * 
 *  * Run docker with env_file from terminal
 * -------------------------------------
 * 
 *  ==> docker run -v %cd%:/app:ro -v /app/node_modules --env-file ./.env-p 3000:3000 -d --name node-app node-app-image
 *  ==> docker run -v {pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 3000:3000 -d --name node-app node-app-image
 * 
 * command: docker logs container_name -f(for follow, real time updates the logs on terminal)
 * docker compose  -f docker-compose.yml -f docker-dompose.dev.yml up -d -V(Recreate anonymous data instead recreating from old container)
 * docker compose  -f docker-compose.yml -f docker-dompose.dev.yml up -d --scale node-app=2(service_name: num, is to scale multipe instance of a container)
 * 
 */