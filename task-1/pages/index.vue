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
  @include  respond-to(mobile) {
    padding:  90px 16px;
  }
}

</style>
