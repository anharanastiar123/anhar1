<template>
  <div>
    <h1>new arrival</h1>

    <div class="text-muted" v-if="loading">sedang memuat...</div>
    <div class="row">
      <div class="col-md-4" v-for="produk in products" :key="produk.id">
        <div class="card">
          <div class="card-header">
            <img :src="produk.foto" width="100%" class="img-thumb" />
          </div>
          <div class="card-body">
            <h4>{{ produk.nama }}</h4>
            <h4>Rp{{ produk.harga }}</h4>
            <a :href="produk.link_external" class="btn btn-danger">beli</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: "",
      loading: true,
    };
  },
  mounted() {
    this.getProduk();
  },
  methods: {
    async getProduk() {
      let { data, error } = await this.$supabase.from("tb_produk").select().order("id", { ascending: false }) ;

      if (data) {
        this.products = data;
        this.loading = false; // sembunyikan tulisan loading.. :D
      }
      if (error) console.error(error);
    },
  },
};
</script>

<style lang="scss" scoped></style>
