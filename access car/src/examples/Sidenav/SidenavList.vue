<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          url="/dashboard-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? '' : 'Dashboard'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
        <li class="nav-item">
        <sidenav-item
          url="/vehiculos"
          :class="getRoute() === 'vehiculos' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? '' : 'Vehiculos'"
        >
          <template v-slot:icon>
            <i class="ni ni-bus-front-12 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/entradas"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? '' : 'Registro entradas'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-success text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
            <li class="nav-item">
        <sidenav-item
          url="/salidas"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? '' : 'Registro salidas'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-danger text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/pagosresidentes"
          :class="getRoute() === 'pagosresidentes' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? '' : 'Pago residentes'"
        >
          <template v-slot:icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      
      <li class="mt-3 nav-item">
        <h6
          v-if="this.$store.state.isRTL"
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          
        </h6>
        <h6
          v-else
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Administración
        </h6>
      </li>

    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "AccesCar",
      controls: "",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    // SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
