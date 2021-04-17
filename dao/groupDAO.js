const db=require('../db/db');

class GroupDAO {

  async getGroup(id)
  {
    return db('Groups').where('id',id).first();
  }

  async createGroup(groupName)
  {
    const [id] = await db('Groups').insert({
      group_name: groupName
    }).returning('id');

    return id;
  }

  async deleteGroup(id)
  {
   return db('Groups').where('id',id).del();
  }

  async updateGroup(id,groupName)
  {
     return db('Groups').where({ id: id}).update({
      group_name: groupName
    });
  }
}

module.exports = new GroupDAO();
