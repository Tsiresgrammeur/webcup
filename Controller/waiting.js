const waitingService = require('../service/waitingService');

class WaitingController {
  async getWaiting(req,res)
  {
    try{
      const numMat = await waitingService.getWaiting(req.body);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }

  }

  async createWaiting(req,res) {
    try {
      const numMat = await waitingService.createWaiting(req.body);
      res.status(201).json(numMat); 
    }
    catch(err){
      console.error(err);
    }
  }

  async deleteWaiting(req,res) {

    try{
      const numMat = await waitingService.deleteWaiting(req.params.id);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }
  }

}

module.exports = new WaitingController();
