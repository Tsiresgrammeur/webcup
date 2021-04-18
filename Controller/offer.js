const offerService = require('../service/offerService');

class OfferController {
  async getOffer(req,res)
  {
    try{
      const numMat = await offerService.getOffer(req.body);
      res.status(201).json(numMat);
    }
    catch(err){
      console.error(err);
    }
  }

  async createOffer(req,res) {
    try {
      const id = await offerService.createOffer(req.body);
      res.status(201).json(id); 
    }
    catch(err){
      console.error(err);
    }
  }

  async deleteOffer(req,res) {

    try{
      const id = await offerService.deleteOffer(req.params.id);
      res.status(201).json(id);
    }

    catch(err){
      console.error(err);
    }
  }

  async updateOffer(req,res) 
  {
    try{
      const id = await offerService.updateOffer(req.params.id,req.body);
      res.status(201).json(id);
    }

    catch(err){
      console.error(err);
    }
  }
}

module.exports = new OfferController();
