<template>
  <div class="wrap">
    <base-product :product="product" />
  </div>
</template>

<script>

export default {
  middleware: ['product'],
  computed: {
    product () {
      let product = this.$store.getters['product/getProduct']
      product = JSON.parse(JSON.stringify(product))
      return product
    }
  }

}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 90px;
  @media (max-width: $desktop) {
    padding:  90px 36px;
  };
  @media (max-width: $mobile) {
    padding:  90px 16px;
  };
}

</style>
