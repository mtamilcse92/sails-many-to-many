/**
 * OwnerController
 *
 * @description :: Server-side logic for managing owners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OwnerController.create()`
   */
  create: function (req, res) {
    var values = req.params.all();
    Owner.create(values,function(err,success){
      if (err) {
        return res.send(err,500);
      }
      res.json({craeted:success});
    });
  },


  /**
   * `OwnerController.update()`
   */
  update: function (req, res) {
   var values = req.params.all();
   var id = req.param('id');
   Owner.update(id,values,function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json({updated:updated});
   });
  },


  /**
   * `OwnerController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Owner.destroy(id,function(err,done){
    if (err) {
      return res.send(err,500);
    }
    res.json({values:"deleted"});
   });
  },


  /**
   * `OwnerController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
   Owner.findOne(id,function(err,done){
    if (err) {
      return res.send(err,500);
    }
    res.json({values:done});
   });
  }
};

