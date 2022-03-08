<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Contact</h1>
      <peta />
    </div>
    <div class="col-md-12">
      <formcontact />
    </div>
  </div>
</template>

<script>
import peta from "../components/peta.vue";
import formcontact from "../components/formcontact.vue";

export default {
  components: {
    peta,
    formcontact,
  },
};
</script>
