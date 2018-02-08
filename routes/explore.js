
/*
 * GET home page.
 */
var data = require('../explore.json');
exports.view = function(req, res){
  res.render('explore',data);
};