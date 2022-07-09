const express = require('express') ;
const helmet = require('helmet');
const cors = require( 'cors');
const http = require('http')
require("./db")
const router = require('./routes/routes')

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/',router)
const server = http.createServer(app);
const port = PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
