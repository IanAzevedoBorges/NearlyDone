const setDataCard = function (payload) {
  this.dataCard = {
    topic: payload.topic,
    yourName: payload.yourName,
    mensagem: payload.mensagem,
    canShow: payload.seeCreator,
  };
};

const setPlaceHolderLink = function (payload) {
  this.PlaceHolderLink = payload;
};

export default {
  setDataCard,
  setPlaceHolderLink
};
