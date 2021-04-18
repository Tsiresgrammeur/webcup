const db=require('../db/db');

class OfferDAO {

  async getOffer(id)
  {
    return db('Offer').where('id',id).first();
  }

  async createOffer(idGroup,idUser,description)
  {
    const [id] = await db('Offers').insert({
      id_group:idGroup,
      id_user:idUser,
      description,
      date: new Date()
    }).returning('id');

    return id;
  }

  async deleteOffer(id)
  {
   return db('Offer').where('id',id).del();
  }

  async updateOffer(idGroup,idUser,description,interested)
  {
     return db('Offer').where({ id: id}).update({
      id_group:idGroup,
      id_user:idUser,
      description,
      interested
    });
  }
}

module.exports = new OfferDAO();
