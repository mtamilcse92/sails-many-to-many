/**
 * MobileController
 *
 * @description :: Server-side logic for managing mobiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `MobileController.create()`
   */
  create: function (req, res) {
     var values = req.params.all();
    Mobile.create(values,function(err,success){
      if (err) {
        return res.send(err,500);
      }
      res.json({craeted:success});
    });
  },


  /**
   * `MobileController.update()`
   */
  update: function (req, res) {
    var values = req.params.all();
   var id = req.param('id');
   Mobile.update(id,values,function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({updated:updated});
   });
  },


  /**
   * `MobileController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
   Mobile.destroy(id,function(err,done){
    if (err) {
      return res.send(err,500);
    }
    res.json({values:"deleted"});
   });
  },


  /**
   * `MobileController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
   Mobile.findOne(id,function(err,done){
    if (err) {
      return res.send(err,500);
    }
    res.json({values:done});
   });
  }
};

