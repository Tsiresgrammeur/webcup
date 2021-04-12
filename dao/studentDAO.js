const db=require('../db/db');

class StudentDAO {
  async getStudent(numMat)
  {
    return db('Student').where('num_mat',numMat).first();
  }
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

  async deleteStudent(numMat)
  {
   return db('Student').where('num_mat',numMat).del();
  }

  async updateStudent(numMat, email, firstName, lastName, level, course, password)
  {
     return db('Student').where({ num_mat: numMat}).update({
      num_mat: numMat,
      email,
      first_name: firstName,
      last_name: lastName,
      level,
      course,
      password: password
    });
  }
}

module.exports = new StudentDAO();
