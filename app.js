'use strict'
const express = require('express')
const ytdl = require('ytdl-core')
const cors = require('cors')

// App configuration
const PORT = process.env.PORT || 3000

// Main application
const app = express()

// Template engine
app.set('view engine', 'ejs')

// Static public folder
app.use(express.static('public'))

// Cors
app.use(cors())

// Basic routes
app.get('/', (req, res) => res.render('index', { title: 'Youtube Downloader' }))

app.get('/download', async (req, res) => {
  const url = req.query.URL
  //const info = await ytdl.getBasicInfo(url)
  const info = await ytdl.getInfo(url, {
    format: 'mp4'
  })
  const contentLength = info.formats[0].contentLength.toString()

  console.log(`Requested download URL: ${url}`)
  console.log('Video info:')
  console.log('Name:', info.videoDetails.title)
  console.log(contentLength)

  res.set({
    'Content-Disposition': 'attachment; filename="' + info.videoDetails.title + '.mp4"',
    'Content-Length': contentLength
  })

  ytdl(url, {
    format: 'mp4',
  }).pipe(res)
})

app.use((req, res) => {
  res.status(404).render('404', { title: '404 | Youtube Downloader' })
})

app.listen(PORT, () => console.log(`Application started on http://localhost:${PORT}`))