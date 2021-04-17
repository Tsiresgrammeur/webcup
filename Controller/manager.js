const managerService = require('../service/managerService');

class ManagerController {
  async getManager(req,res)
  {
    try{
      const numMat = await managerService.getManager(req.body);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }

  }

  async createManager(req,res) {
    try {
      const numMat = await managerService.createManager(req.body);
      res.status(201).json(numMat); 
    }
    catch(err){
      console.error(err);
    }
  }

  async deleteManager(req,res) {

    try{
      const numMat = await managerService.deleteManager(req.params.id);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }
  }

  async updateManager(req,res) 
  {
    try{
      const numMat = await managerService.updateManager(req.body);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }
  }
}

module.exports = new ManagerController();
