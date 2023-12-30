const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
const path = require('path');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
app.use(express.static('3raysnaapp/build'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
db.connect(dbURI);
const nodemailer = require('nodemailer');








app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '3raysnaapp/build', 'index.html'));
  });

  app.listen(process.env.PORT || 100, () => console.log('Server running on port', process.env.PORT || 100));
