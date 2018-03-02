
/*
 * GET home page.
 */
var data = require('../update.json');

exports.view = function(req, res){
  data.ideas.sort(function(a,b){
    var dateA = new Date(a.operationTime);
    var dateB = new Date(b.operationTime);
    return dateB.valueOf() - dateA.valueOf();
  })
  res.render('mylist',data);
};

exports.tried = function(req, res){
  var temp = new Date();
  var object = {
  	"reflection": req.query.reflection,
  	"date": temp.toString(),
    "property": req.query.property==1? "public":"private",
    "provider": "McDonald"
  }
  console.log(object);
  for(i in data.ideas){
  	if(data.ideas[i].id == req.params.triedId) {
  		data.ideas[i].userTried="true";
  		if(!data.ideas[i]["notes"]) data.ideas[i]["notes"] = [];
  		data.ideas[i]["notes"].unshift(object);
      var temp = new Date();
  		data.ideas[i].operationTime = temp.toString();
  		break;
  	}
  }
  var fromPage = req.params.fromPage;
  if(fromPage == "mylist"){
    console.log("equals to mylist");
    res.redirect('/mylist');
  } 
  else {
    console.log("equals to details");
    res.redirect('/idea/'+req.params.triedId);
  }
}