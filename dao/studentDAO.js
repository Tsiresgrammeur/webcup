const db=require('../db/db');

class StudentDAO {
  async createStudent(numMat, email, firstName, lastName, level, course, password)
  {
    const [num_mat] = await db('Student').insert({
      num_mat: numMat,
      email,
      first_name: firstName,
      last_name: lastName,
      level,
      course,
      password: password
    }).returning('num_mat');

    return num_mat;
  }
}

module.exports = new StudentDAO();
