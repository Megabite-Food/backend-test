<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <pago-card/>
      </div>

    </div>
  </div>
</template>

<script>
import PagoCard from "./components/PagoCard.vue";


export default {
  name: "PagosResidentes",
  components: {
    PagoCard,
      },
  data() {
    return {
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Salary",
        desc: "Belong Interactive",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
    };
  }
};
</script>
