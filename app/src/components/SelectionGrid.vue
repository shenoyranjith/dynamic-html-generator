<template>
  <v-container fluid pa-5>
    <elements></elements>
  </v-container>
</template>
<script>
import Elements from "./Elements";

export default {
  data() {
    return {
      selectedItems: []
    };
  },
  components: {
    Elements
  }
};
</script>
