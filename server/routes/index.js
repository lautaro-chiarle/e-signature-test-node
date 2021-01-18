function routes(app) {
  var express = require("express");
  var router = express.Router();
  var {service_whowins} = require('../service');

  /**
   * @group foo - Operations about user
   */

  /**
   * @route GET /who-wins/plaintiff/{plaintiff}/defendant/{defendant}
   * @param {string} plaintiff.path.required - Plaintiff's signatures - eg: KN
   * @param {string} defendant.path.required - Defendant's signatures - eg: VVN
   * @returns {string} 200 - An String indicating the winner - eg: Plaintiff
   * @returns {Error}  400 - Bad request
   */
  router.get("/who-wins/plaintiff/:plaintiff/defendant/:defendant", function (req, res) {
    try{
      let response = service_whowins(req.params.plaintiff, req.params.defendant);
      res.send(response);
    }catch(error){
      res.status(400).send(JSON.stringify(error.message));
    }
    
  });

  app.use("/v1/", router);
}

module.exports = routes;
