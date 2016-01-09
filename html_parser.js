var request = require('request');
var parserObj = {};
parserObj.parseAtags = function(url,cb){
  request(url,function(err,response,body){
     if(err == null) {
       var atagRegex = /<a.*href=.*>/g;
       var aTags = body.match(atagRegex);
       var hrefAttrs = [];
       aTags.forEach(function(aTag,index){
           hrefAttrs.push(aTag.split(" ").filter(function(attr,index){
              return /href=.*>/.test(attr);
           }));
       });
       hrefAttrs = hrefAttrs.filter(function(hrefAttr,index){
         return hrefAttr.length != 0
       })
       cb.call(this,null,hrefAttrs);
     }
     else {
        cb.call(this,err,null);
     }
  });
};
module.exports = parserObj;
