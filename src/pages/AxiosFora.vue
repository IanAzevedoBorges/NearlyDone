<template>
  <div>
    <q-btn to="/axios-dentro" color="amber" glossy label="Return to page" />
    {{ getPlaceHolderLink }}
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "pinia";
import { geralStore } from "stores/geral";

export default {
  computed: {
    ...mapState(geralStore, {
      getPlaceHolderLink: "getPlaceHolderLink",
    }),
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      fetchedData: "",
    };
  },
  methods: {
    fetchData() {
      axios
        .get(this.getPlaceHolderLink)
        .then((response) => {
          this.fetchedData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
