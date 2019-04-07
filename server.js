const express = require('express');
const server = express();
const { createBundleRenderer } = require('vue-server-renderer');

const template = `<html>
    <head>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <!--vue-ssr-outlet-->
        <script src="/main.js" type="text/javascript">
        </script> 
    </body>
</html>
`
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
// const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // recommen, // (optional) page template
    template
})

server.use(express.static('./dist'));


server.get('*', (req, res) => {
    const context = { url: req.url };

    renderer.renderToString(context, (err, html) => {
        if(err) {
            console.log('Error', err);
        }
        res.end(html)
    })
})

server.listen(8080);
