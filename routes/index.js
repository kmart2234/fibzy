const express       = require('express');
const fibzy         = require('../helpers/fibzy');

const router = express.Router();

router.get('/:index', async(req, res) => {
   try {
       res.json(await fibzy(req.params.index))
   }
   catch(err){
       res.status(400).send(err);
   }
});

router.post('/', async(req, res) => {
   try {
       res.json(await fibzy(req.body.index));
   }
   catch(err){
       res.status(400).send(err);
   }
});

module.exports = router;