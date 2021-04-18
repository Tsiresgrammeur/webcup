const offerDAO = require('../dao/offerDAO');

class OfferService 
{
  getOffer(idOffer)
  {
    const {id} = idOffer;
    return offerDAO.getOffer(id);
  }
  createOffer(OfferDto)
  {
    const {idGroup,idUser,description} = OfferDto;
    return offerDAO.createOffer(idGroup,idUser,description);
  }

  deleteOffer(idOffer)
  {
    const id = idOffer;
    return offerDAO.deleteOffer(id);
  }

  updateOffer(id,OfferDto)
  {
    const {idGroup,idUser,description,interested} = OfferDto;
    return offerDAO.updateOffer(id, idGroup,idUser,description,interested);
  }
}

module.exports = new OfferService();
