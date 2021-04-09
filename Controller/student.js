const studentService = require('../service/studentService');

class StudentController {
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
      const numMat = await studentService.deleteStudent(req.body);
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
