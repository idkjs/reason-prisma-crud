## Running backend

1.  `cd backend`
1.  run `yarn install`
1.  run `docker-compose up -d` or `docker-compose up` to see logs.
1.  run `prisma deploy`
1.  run `yarn start`
1.  open `http://localhost:4005/playground` to run queries against app and db (prisma) endpoints.

## Frontend

1.  `cd frontend && yarn install`
2.  run `yarn start`

## Running on Digital Ocean

Follow the same exact steps above to set up the backend. Dont run the front end.

## Running Front end from docker image.

1.  Build the Dockerfile in `frontend/Dockerfile` with `docker build -t idkjs/image-name`
2.  Push to hub.docker.com: `docker push idkjs/image-frontend`
3.  In Digital Ocean Droplet get the image with `docker pull idkjs/image-frontend`
4.  Run the frontend from the image on port 3000: `docker run -d -p 3000:80 idkjs/image-frontend`
5.  open `http://droplet.ip.address:3000/`

## TODO

1.  fix query caching so data refreshes.
