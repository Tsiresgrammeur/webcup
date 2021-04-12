const studentDAO = require('../dao/studentDAO');

class StudentService 
{
  getStudent(idStudent)
  {
    const {numMat} = idStudent;
    return studentDAO.getStudent(numMat);
  }
  createStudent(studentDto)
  {
    const { numMat,email,firstName,lastName,level,course, password } = studentDto;
    return studentDAO.createStudent(numMat, email, firstName, lastName,level,course, password);
  }

  deleteStudent(idStudent)
  {
    const {numMat} = idStudent;
    return studentDAO.deleteStudent(numMat);
  }

  updateStudent(studentDto)
  {
    const {numMat,email,firstName,lastName,level,course, password} = studentDto;
    return studentDAO.updateStudent(numMat,email,firstName,lastName,level,course, password);
  }
}

module.exports = new StudentService();
