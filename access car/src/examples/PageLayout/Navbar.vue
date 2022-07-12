<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4"
    style="width: 47% !important;"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container ps-2 pe-0">
      <router-link
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        to="/"
        >AccessCar</router-link
      >
     
    
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";

export default {
  name: "navbar",
  data() {
    return {
      downArrWhite,
      downArrBlack
    };
  },
  props: {
    btnBackground: String,
    isBlur: String,
    isBtn: { type: String, default: "bg-gradient-light" },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode
      };
    }
  }
};
</script>
