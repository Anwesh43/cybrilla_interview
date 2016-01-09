var router = require('express').Router();
var htmlParser = require('./html_parser.js');
router.get('/allHrefTags',function(req,res){
    htmlParser.parseAtags('https://en.wikipedia.org/wiki/Barack_Obama',function(err,hrefTags){
       res.send(hrefTags);
    });
});
module.exports = router;
