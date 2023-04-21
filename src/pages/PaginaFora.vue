<template>
  <h1>Pagina fora</h1>
  <q-btn to="/pagina-dentro" color="amber" glossy label="Amber" />
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      height="300px"
      class="bg-purple text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="Title" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ this.modelCard.topic }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="yourName" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ this.modelCard.yourName }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="mensagem" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ this.modelCard.mensagem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapState } from "pinia";
import { geralStore } from "stores/geral";

export default {
  setup() {
    return {
      slide: ref("style"),
    };
  },
  computed: {
    ...mapState(geralStore, {
      getDataCard: "getDataCard",
    }),
  },
  mounted() {
    this.modelCard = this.getDataCard;
  },
  data() {
    return {
      modelCard: {
        topic: "Outra coisa",
        yourName: "",
        mensagem: "",
      },
    };
  },
};
</script>
