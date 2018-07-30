const fs = require("fs")
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const LRU = require('lru-cache')
const {createBundleRenderer} = require('vue-server-renderer')
const express = require("express")

const serverInfo =
    `express/${require('express/package.json').version} ` +
    `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()


function createRenderer(bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
        cache: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        basedir: resolve('./dist'),
        runInNewContext: false
    }))
}


const templatePath = resolve('./src/index.template.html')
const template = fs.readFileSync(templatePath, 'utf-8')


app.get("*", (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.send(template)
});

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
