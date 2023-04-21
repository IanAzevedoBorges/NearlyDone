<template>
  <h1>Axios Fora</h1>
  <input
    type="text"
    v-model="Axioslink"
    placeholder="Link do site"
    :key="Axioslink"
  />
  <br />
  <button @click="onClick">Fixar</button>

  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="dataPost"
      :columns="columns"
      row-key="dataPost"
    >
      <template v-slot:body-cell-viewMore="props">
        <q-td :props="props">
          <div>
            <q-btn @click="onClickTable(props.row)">Editar</q-btn>
          </div>
          <div class="my-table-details">
            {{ props.row.details }}
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "pinia";
import { geralStore } from "stores/geral";

export default {
  data() {
    return {
      Axioslink: "https://jsonplaceholder.typicode.com/todos",
      AxiosHolder: [],
      index: 23,
      columns: [
        {
          name: "userId",
          required: true,
          label: "User Id",
          align: "cente",
          field: (row) => row.name,
          sortable: true,
        },
        {
          name: "id",
          align: "center",
          label: "Id",
          field: "id",
          sortable: true,
        },
        {
          name: "title",
          align: "center",
          label: "Title",
          field: "title",
          sortable: true,
        },
        {
          name: "completed",
          align: "center",
          label: "Completed",
          field: "completed",
          sortable: true,
        },
        {
          name: "viewMore",
          align: "center",
          label: "View More",
          field: "id",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    dataPost() {
      return this.AxiosHolder;
    },
  },
  methods: {
    ...mapActions(geralStore, {
      setPlaceHolderLink: "setPlaceHolderLink",
    }),

    async onClick() {
      // await this.setPlaceHolderLink(this.onClickTable());
      this.getPlaceHolder();
    },
    getPlaceHolder() {
      axios.get(this.Axioslink).then((response) => {
        this.AxiosHolder = response.data;
      });
    },
    onClickTable(index) {
      this.setPlaceHolderLink(index);
    },
  },
};
</script>
