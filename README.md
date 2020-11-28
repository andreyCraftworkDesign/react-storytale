// install and start the dependencies :
npm install
npm start

// build the docker image
docker build -t react-app .

// run the app
docker run -d --name reactapp -p 80:80 react-app
