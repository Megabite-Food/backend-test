<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <tabla-salidas />
      </div>
    </div>
  </div>
</template>

<script>
import TablaSalidas from "./components/TablaSalidas.vue";


export default {
  name: "salidas",
  components: {
    TablaSalidas,

  },
  data() {
    return {
 
    };
  },
};
</script>
