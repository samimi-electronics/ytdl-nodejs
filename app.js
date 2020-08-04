const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')

// App configuration
const PORT = process.env.PORT || 3000

// Main application
const app = express()

// Template engine
app.set('view engine', 'ejs')

// Static public folder
app.use(express.static('public'))

// Basic routes
app.get('/', (req, res) => res.render('index', { title: 'Youtube Downloader' }))

app.get('/download', (req, res) => {
  res.send('/download')
})

app.use((req, res) => {
  res.status(404).render('404', { title: '404 | Youtube Downloader' })
})

app.listen(PORT, () => console.log(`Application started on http://localhost:${PORT}`))