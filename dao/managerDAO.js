
const db=require('../db/db');

class ManagerDAO {

  async getManager(numMat)
  {
    return db('Manager').where('num_mat',numMat).first();
  }

  async createManager(numMat, email, firstName,lastName, password,status)
  {
    const [num_mat] = await db('Manager').insert({
      num_mat: numMat,
      email,
      first_name: firstName,
      last_name: lastName,
      password: password,
      status
    }).returning('num_mat');

    return num_mat;
  }

  async deleteManager(numMat)
  {
   return db('Manager').where('num_mat',numMat).del();
  }

  async updateManager(numMat, email, firstName,lastName, password,status)
  {
     return db('Manager').where({ num_mat: numMat}).update({
      num_mat: numMat,
      email,
      first_name: firstName,
      last_name: lastName,
      password: password,
      status
    });
  }
}

module.exports = new ManagerDAO();
