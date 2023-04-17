<template>
  <q-card class="my-card bg-secondary text-white">
    <q-card-section>
      <div class="text-h6">{{ topic }}</div>
      <div v-if="isShowYourName" class="text-subtitle2">{{ yourName }}</div>
    </q-card-section>

    <q-card-section>
      {{ mensagem }}
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      isShowYourName: true,
    };
  },
  props: {
    topic: {
      type: String,
      require: true,
    },
    yourName: {
      type: String,
      require: true,
    },
    mensagem: {
      type: String,
      require: true,
    },
    // isShowYourName: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  methods: {
    canShowYourName() {
      this.isShowYourName = !this.isShowYourName;
      return this.isShowYourName;
    },
  },
};
</script>
