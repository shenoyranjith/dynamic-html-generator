<template>
  <v-container fluid pa-5>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <elements @submit="onSubmit" v-on="on"></elements>
      </template>
      <v-card>
        <v-card-text>
          <v-layout row wrap px-2>
            <v-flex xs12>
              <v-text-field label="Filename" v-model="fileName"> </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Page Title" v-model="pageTitle">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="getFile">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout v-if="filePath" style="text-align: center">
      <v-flex><a :href="filePath">Generated HTML</a></v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from "vue";
import Elements from "./Elements";

const baseUrl = "http://localhost:3000/";
// const baseUrl = "http://192.168.0.188:3000/";

export default {
  data() {
    return {
      selectedItems: [],
      dialog: false,
      fileName: "",
      pageTitle: "",
      filePath: ""
    };
  },
  methods: {
    onSubmit(elements) {
      this.selectedItems = elements;
      this.dialog = true;
    },
    async getFile() {
      let response = await Vue.axios.post(baseUrl, {
        elements: JSON.stringify(this.selectedItems),
        fileName: this.fileName,
        pageTitle: this.pageTitle
      });
      let path = response.data.filePath;
      this.filePath = path;
      this.fi
      this.dialog = false;
    }
  },
  components: {
    Elements
  }
};
</script>
