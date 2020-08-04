const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')

// App configuration
const PORT = process.env.PORT || 3000

// Main application
const app = express()

// Basic routes
app.get('/', (req, res) => res.send('Application works...'))

app.listen(PORT, () => console.log(`Application started on http://localhost:${PORT}`))