# Node.JS Youtube downloader

With this application, you can download youtube videos with the highest quality. 
The application automatically decides to download the best availble video and audio quality.

### Tech
This application is built using:
- [Node.JS](https://nodejs.org/) - JavaScript runtime
- [Express.JS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [ytdl-core](npmjs.com/package/ytdl-core) - Youtube video downloader
- [CORS](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.


# Installation
This application requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies:

```sh
$ cd ytdl-nodejs
$ npm install
$ npm run start
```

# Usage


After running the commads above, you will see the following message in the terminal:
```sh
Application started on http://localhost:3000
```
Open the URL on any modern browser and copy the YouTube video URL and click on the download button.

### *Note* 
- Based on where you live, the application might not download anything. I live in Iran and to download any YouTube video, I must use a VPN. So if you have any issues downloading videos, try using a VPN. If that fails, post an issue.
