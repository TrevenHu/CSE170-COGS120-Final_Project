
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index",{
  	"bottom-bar": [
      { 'name': 'Index',
        'id': 'index'
      },
      { 'name': 'Explore',
        'id': 'explore'
      },
      { 'name': 'Surprise',
        'id': 'surprise'
      },
      { 'name': 'Profile',
        'id': 'profile'
      }
    ]  
  });
};