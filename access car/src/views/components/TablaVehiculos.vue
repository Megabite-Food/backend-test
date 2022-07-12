<!-- Codigo HTML que se mostrara en la pagina de las entradas-->
<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Vehiculos Registrados</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="col-12 text-end">
<a class="btn bg-gradient-success mb-0" @click="AltaEntradas()">
  <i class="fas fa-plus" aria-hidden="true"></i> Agregar</a>
</div>
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No. Placas</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Modelo</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Estatus</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Fecha alta</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Tipo de Vehiculo</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">HG2-341</h6>
                    <!-- <p class="text-xs text-secondary mb-0">john@creative-tim.com</p> -->
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Versa </p>
                <p class="text-xs text-secondary mb-0">2021</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Activo</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">Oficial</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Modificar</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">JP-341-LK</h6>
                    <!-- <p class="text-xs text-secondary mb-0">john@creative-tim.com</p> -->
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Corsa </p>
                <p class="text-xs text-secondary mb-0">2017</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Activo</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
               <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">Residente</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Modificar</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">MKL-341</h6>
                    <!-- <p class="text-xs text-secondary mb-0">john@creative-tim.com</p> -->
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Civic </p>
                <p class="text-xs text-secondary mb-0">2000</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Activo</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
               <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">No residente</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Modificar</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">NMSL-345213</h6>
                    <!-- <p class="text-xs text-secondary mb-0">john@creative-tim.com</p> -->
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Bora </p>
                <p class="text-xs text-secondary mb-0">2010</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-danger">Baja</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
               <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">No residente</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Modificar</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabla-vehiculos",
  //Metodo para llamar la pantalla alta de entradas
 methods:{
   AltaEntradas(){
   this.$router.push('/alta'); 
      }
  }
};
</script>
