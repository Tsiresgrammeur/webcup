const waitingDAO = require('../dao/waitingDAO');

class WaitingService 
{
  getWaiting(idWaiting)
  {
    const {numMat} = idWaiting;
    return waitingDAO.getWaiting(numMat);
  }
  createWaiting(waitingDto)
  {
    const { numMat,email,firstName,lastName,level,course, password } = waitingDto;
    return waitingDAO.createWaiting(numMat, email, firstName, lastName,level,course, password);
  }

  deleteWaiting(idWaiting)
  {
    const numMat = idWaiting;
    return waitingDAO.deleteWaiting(numMat);
  }

  updateWaiting(waitingDto)
  {
    const {numMat,email,firstName,lastName,level,course, password} = waitingDto;
    return waitingDAO.updateWaiting(numMat,email,firstName,lastName,level,course, password);
  }
}

module.exports = new WaitingService();
