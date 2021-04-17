const groupService = require('../service/groupService');

class GroupController {
  async getGroup(req,res)
  {
    try{
      const numMat = await groupService.getGroup(req.body);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }

  }

  async createGroup(req,res) {
    try {
      const id = await groupService.createGroup(req.body);
      res.status(201).json(id); 
    }
    catch(err){
      console.error(err);
    }
  }

  async deleteGroup(req,res) {

    try{
      const id = await groupService.deleteGroup(req.params.id);
      res.status(201).json(id);
    }

    catch(err){
      console.error(err);
    }
  }

  async updateGroup(req,res) 
  {
    try{
      const id = await groupService.updateGroup(req.params.id,req.body);
      res.status(201).json(id);
    }

    catch(err){
      console.error(err);
    }
  }
}

module.exports = new GroupController();
