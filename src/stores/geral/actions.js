const setDataCard = function (payload) {
  this.dataCard = {
    topic: payload.topic,
    yourName: payload.yourName,
    mensagem: payload.mensagem,
    canShow: payload.canShow,
  };
};

export default {
  setDataCard,
};
