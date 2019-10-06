<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Dynamic HTML Generator</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content><selection-grid></selection-grid></v-content>
  </v-app>
</template>

<script>
import SelectionGrid from "./components/SelectionGrid";
export default {
  name: "App",
  components: {
    SelectionGrid
  },
  data: () => ({
    //
  })
};
</script>
