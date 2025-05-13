const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/rpc', async (req, res) => {
  try {
    const response = await axios.post(
    
 'https://9c42-190-26-185-5.ngrok-free.app',

      req.body,
      {
        auth: {
          username: process.env.RPC_USER,
          password: process.env.RPC_PASS
        },
        headers: {
          'Content-Type': 'text/plain'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`🟢 RPC server escuchando en http://localhost:${port}/rpc`);
});
