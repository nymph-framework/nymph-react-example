<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/62506028?s=165&v=4" alt="yaat-logo"/>
  <img src="https://raw.githubusercontent.com/yaat-project/yaat-react-example/master/screenshots/react.png" height="150px" alt="react-logo"/>
</p>

This repository is the example of <a href="https://github.com/yaat-project/yaat">Yaat</a> server used with <a href="https://reactjs.org">Reactjs</a> for frontend.

## Getting Started

First clone this repository, then install dependencies.

```sh
pip3 install -r requirements.txt
npm install
```

## Running Server & React Application

By default, it comes with <a href="https://www.uvicorn.org">uvicorn</a> to run Yaat server. For React application, it is setup with babel and I have also configured npm comments to build and run application.

```sh
uvicorn src.app:app --reload
npm run dev
```

`npm run dev` will auto rebuild your React application when code changes. You can also run `npm run build` to build the application instead.

Now open http://localhost:8000 to see your React app.

<p align="center">
<img src="https://raw.githubusercontent.com/yaat-project/yaat-react-example/master/screenshots/yaat-react-example.png" alt="screenshot"/>
</p>
