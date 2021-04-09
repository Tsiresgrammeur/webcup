const studentDAO = require('../dao/studentDAO');

class StudentService {
  createStudent(studentDto){
    const { numMat,email,firstName,lastName,level,course, password } = studentDto;
    return studentDAO.createStudent(numMat, email, firstName, lastName,level,course, password);
  }
}

module.exports = new StudentService();
