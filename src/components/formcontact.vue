<template>
  <div class="col-md-6 mt-5 mb-5">
    <h2 class="text-left">Mau diskusi dulu? Yuk kirim sini!</h2>
    <form @submit.prevent="kirim">
      <div class="form-group">
        <label>NAMA</label>
        <input v-model="form.nama" type="text" class="form-control" required />
      </div>
      <div class="form-group">
        <label>EMAIL</label>
        <input v-model="form.email" type="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label>SUBJEK</label>
        <input v-model="form.subjek" type="text" class="form-control" required />
      </div>
      <div class="form-group">
        <label>PESAN</label>
        <textarea v-model="form.pesan" class="form-control" cols="30" rows="5" required></textarea>
      </div>
      <button class="btn btn-danger btn-block" :disabled="sending">
        <span v-if="!sending">Kirim</span>
        <span v-else>Sedang mengirim...</span>
      </button>
      <div v-if="sent" class="alert alert-success">psan udah ke kirim!</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nama: "",
        email: "",
        subjek: "",
        pesan: "",
      },
      sent: false,
      sending: false,
    };
  },

  methods: {
    async kirim() {
      this.sending = true; // kondisi saat sedang kirim pesan :D
      let { data, error } = await this.$supabase.from("tb-kontak").insert([this.form]);
      if (data) {
        this.sent = true;
        this.sending = false;
        this.form = "";
      }
      if (error) console.log("ga kekirim. ayang dah gaada! :(");
    },
  },
};
</script>

<style scoped>
.form-group {
  text-align: left;
}
</style>
