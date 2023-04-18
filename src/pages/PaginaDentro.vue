<template>
  <h1>Pagina dentro</h1>
  <div style="text-align: center">
    <input type="text" v-model="modelCard.topic" placeholder="Topic" /><br />
    <hr />
    <br />
    <input type="text" v-model="modelCard.yourName" placeholder="Your Name" /><br />
    <hr />
    <br />
    <input type="text" v-model="modelCard.mensagem" placeholder="Mensagem" /><br />
    <hr />
    <br />
    <input
      type="checkbox"
      v-model="modelCard.seeCreator"
      placeholder="How write?"
      @click="onClick"
    /><br />
    <hr />
    <br />
    <button @click="saveCard">Publish</button>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <ICard
      ref="Card1"
      :topic="modelCard.topic"
      :yourName="modelCard.yourName"
      :mensagem="modelCard.mensagem"
      :isShowYourName="modelCard.seeCreator"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { geralStore } from "stores/geral";
import ICard from "components/ICard";
export default {
  data() {
    return {
      modelCard:{
        topic: "Outra coisa",
        yourName: "",
        mensagem: "",
        seeCreator: false,
      }
        
    };
  },
  components: {
    ICard,
  },
  computed:{
    ...mapState(geralStore,{
      getDataCard:"getDataCard"
    })
  },
  methods: {
    ...mapActions(geralStore, {
      setDataCard:"setDataCard"
    }),
    onClick() {
      this.seeCreator = this.$refs.Card1.canShowYourName();
      console.log("checkbox", this.seeCreator);
    },
    saveCard(){
      this.setDataCard(this.modelCard)
    }
  },
};
</script>
