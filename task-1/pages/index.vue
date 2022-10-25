<template>
  <div class="wrap">
    <h1 class="title">
      Комод "Абрис"
    </h1>
    <div class="product">
      <ProductGalletySwiper />
      <div class="product__wrap">
        <BaseRating :rating="product.rating" />
        <div class="product__wrap-price">
          <strong class="product__price">
            {{ Math.round( product.price * ((100 - product.sale) / 100)) }}
          </strong>
          <div class="product__sale">
            -{{ product.sale }}%
          </div>
          <p class="product__old-price">
            {{ product.price }}р
          </p>
        </div>
        <PropertySelection
          v-for="property in product.propertyArr"
          :key="property.id"
          :property="property"
        />
        <div class="product__wrap-btn">
          <button class="product__btn product__btn_add btn">
            В корзину
          </button>
          <button class="product__btn product__btn_fast-add btn">
            Купить в клик
          </button>
        </div>
      </div>
      <BaseTabs :characteristic-arr="product.characteristicArr" />
    </div>
  </div>
</template>

<script>
import BaseTabs from '@/components/BaseTabs.vue'
import ProductGalletySwiper from '@/components/ProductGalletySwiper.vue'
import PropertySelection from '@/components/PropertySelection.vue'
import BaseRating from '@/components/BaseRating.vue'
export default {
  components: {
    ProductGalletySwiper,
    PropertySelection,
    BaseRating,
    BaseTabs
  },
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
}
.title {
  font-weight: 500;
  font-family: 'Geometria', sans-serif ;
  font-size: 1.5rem;
  line-height: 2.125rem;
}
</style>
