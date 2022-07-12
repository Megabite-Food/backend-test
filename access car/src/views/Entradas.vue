<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <tabla-entradas />
      </div>
    </div>
  </div>
</template>

<script>
import TablaEntradas from "./components/TablaEntradas.vue";


export default {
  name: "entradas",
  components: {
    TablaEntradas,

  },
  data() {
    return {
 
    };
  },
};
</script>
