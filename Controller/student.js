const studentService = require('../service/studentService');

class StudentController {
  async getStudent(req,res)
  {
    try{
      const numMat = await studentService.getStudent(req.body);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }

  }

  async createStudent(req,res) {
    try {
      const numMat = await studentService.createStudent(req.body);
      res.status(201).json(numMat); 
    }
    catch(err){
      console.error(err);
    }
  }

  async deleteStudent(req,res) {

    try{
      const numMat = await studentService.deleteStudent(req.params.id);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }
  }

  async updateStudent(req,res) 
  {
    try{
      const numMat = await studentService.updateStudent(req.body);
      res.status(201).json(numMat);
    }

    catch(err){
      console.error(err);
    }

  }
}

module.exports = new StudentController();
