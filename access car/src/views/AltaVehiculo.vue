<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <alta-card />
      </div>
    </div>
  </div>
</template>

<script>
import AltaCard from "./components/AltaCard.vue";


export default {
  name: "alta",
  components: {
    AltaCard,

  },
  data() {
    return {
 
    };
  },
};
</script>
