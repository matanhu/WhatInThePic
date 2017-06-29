const express = require('express');
const router = express.Router();
const testFolder = './tests/';
const fs = require('fs');
const path = require('path');



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/getListFiles/:groupNumber', (req, res) => {
  var listImageNames = [];
  try{
    fs.readdir(path.join(__dirname, '../../dist/assets/images/GroupNumber' + req.params.groupNumber), (err, files) => {
      files.forEach(file => {
        console.log(file);
        if(file.indexOf('.jpg')> -1){
          listImageNames.push(file.replace('.jpg', ''));
        }
      });
      console.log('Success read folder');
      res.send(JSON.stringify(listImageNames));
    })
  } catch(err) {
    console.log('Error read folder: ' + err);
    res.send(JSON.stringify(listImageNames));
  }
  
});

module.exports = router;