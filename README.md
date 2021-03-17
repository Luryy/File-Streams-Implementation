<h1 align="center">Node.JS Streams - Files | Implementation :outbox_tray: </h1>

_This project have a implementation of Node.JS Streams and a comparison between other response methods_

----
### Aplication
To compare the performance this application have 3 different implementation to response a video file.
- A response with "**send**" method, where file would be loaded into memory.
- A response with "**sendFile**" method, where streams the file directly to the user from the file system.
- A response with a **stream code implementation**, where streams the file directly to the user from the file system.

You could see the results, details and explanation at [this Article](todo)

----

### Get Starting

- Clone the project:
```
git clone https://github.com/Luryy/NodeJS-Streams-Files-Implementation.git
cd NodeJS-Streams-Files-Implementation
```

- Download a video file (_min. 150MB_):
_* this file will be used to be transfered as streams_
<pre>
save as <b>ex.mp4</b> at <b>./src/upload/</b>
</pre>

- Install project dependencies and start
```
yarn
yarn dev:server
```

----

### Usage

####Memory monitoring

Every 5 seconds the application logs the total memory used:
_* this will be usefull to see diference between requests_
```
Used Memory: 48 MB
Used Memory: 73 MB
Used Memory: 107 MB
```

####Routes

The aplicacation have 7 routes:

**Files Responses**
- **```GET /stream```** - Return the file using streams implemented method.
- **```GET /send-file```** - Return the file using streams sendFile method.
- **```GET /send-sync```** - Return the file using send method.

**HTML Responses - Rendering the video**
- **```GET /html-stream```** - Renders the video using streams implemented method.
- **```GET /html-send-file```** - Renders the video using streams sendFile method.
- **```GET /html-send-sync```** - Renders the video using send method.
- **```GET /html-all```** - Renders 3 videos using one of each method at seme page.

----

####Requesting and comparing

- After start your aplication, see the memory usage at log to compare after requests.

- Repeat the process below:
```
1. At your Browser and open 10 tabs with one of urls below
2. See the the total of memory usage
3. Close all of 10 tabs
4. Restart the aplication
```
- URLs:
[localhost:3333/stream](http://localhost:3333/stream)
[localhost:3333/send-file](http://localhost:3333/send-file)
[localhost:3333/send-sync](http://localhost:3333/send-sync)








### Projec Structure

Here is the project structure:

```
.
├── src
│   ├── app.ts
│   ├── controller
│   │   ├── SendFileController.ts
│   │   ├── SendSyncController.ts
│   │   └── StreamController.ts
│   ├── html
│   │   ├── index.html
│   │   ├── index-send-file.html
│   │   ├── index-send-sync.html
│   │   └── index-stream.html
│   ├── routes
│   │   └── index.ts
│   ├── server.ts
│   └── upload
│       ├── big-text-file.txt
│       └── ex.mp4
├── babel.config.js
├── Dockerfile
├── heroku.yml
├── LICENSE
├── package.json
├── prettier.config.js
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Autor

👤 **Lucas Yuri**

- Github: [Luryy](https://github.com/luryy)
- LinkedIn: [Lucas Yuri](https://linkedin.com/in/lucas-yuri)


## 📝 License

Copyright © 2021 [Lucas Yuri](https://github.com/luryy).
This project is [MIT](LICENSE) licensed.


