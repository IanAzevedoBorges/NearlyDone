<template>
  <h1>Pagina dentro</h1>
  <div style="text-align: center">
    <input type="text" v-model="topicx" placeholder="Topic" /><br />
    <hr />
    <br />
    <input type="text" v-model="yourNamex" placeholder="Your Name" /><br />
    <hr />
    <br />
    <input type="text" v-model="mensagemx" placeholder="Mensagem" /><br />
    <hr />
    <br />
    <input
      type="checkbox"
      v-model="seeCreator"
      placeholder="How write?"
      @click="onClick()"
    /><br />
    <hr />
    <br />
    <button>Publish</button>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <ICard
      ref="Card1"
      :topic="topicx"
      :yourName="yourNamex"
      :mensagem="mensagemx"
      :isShowYourName="seeCreator"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vue";
import { geralStore } from "stores/geral";
import ICard from "components/ICard";
export default {
  data() {
    return {
      topicx: "Outra coisa",
      yourNamex: "",
      mensagemx: "",
      seeCreator: false,
    };
  },
  components: {
    ICard,
  },

  methods: {
    ...mapAction(geralStore, {}),
    onClick() {
      this.seeCreator = this.$refs.Card1.canShowYourName();
      console.log("checkbox", this.seeCreator);
    },
  },
};
</script>
