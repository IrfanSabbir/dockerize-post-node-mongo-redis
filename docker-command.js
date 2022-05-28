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
 */