const db=require('../db/db');

class WaitingDAO {
  async getWaiting(numMat)
  {
    return db('Waiting').where('num_mat',numMat).first();
  }
  async createWaiting(numMat, email, firstName, lastName, level, course, password)
  {
    const [num_mat] = await db('Waiting').insert({
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

  async deleteWaiting(numMat)
  {
   return db('Waiting').where('num_mat',numMat).del();
  }

}

module.exports = new WaitingDAO();
