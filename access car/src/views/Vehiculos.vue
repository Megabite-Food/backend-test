<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <tabla-vehiculos />
      </div>
    </div>
  </div>
</template>

<script>
import TablaVehiculos from "./components/TablaVehiculos.vue";


export default {
  name: "vehiculos",
  components: {
    TablaVehiculos,

  },
  data() {
    return {
 
    };
  },
};
</script>
