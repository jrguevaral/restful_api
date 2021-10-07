const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Estas son las categorías')
});

module.exports = router;
