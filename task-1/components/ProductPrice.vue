<template>
  <div class="product-price">
    <strong class="product-price__price">
      {{ Math.round( product.price * ((100 - product.sale) / 100)) | numberFormat }}р
    </strong>
    <div class="product-price__sale">
      -{{ product.sale }}%
    </div>
    <p class="product-price__old-price">
      {{ product.price | numberFormat }}р
    </p>
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat'

export default {
  filters: {
    numberFormat
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-price {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: rem($n: 24);
  &__price {
    font-weight: 500;
    font-family: 'Geometria', sans-serif ;
    font-size: sizeIncrease($min: 32, $max: 32);
    line-height: 140%;
  }
  &__sale {
    padding: 2px 8px;
    border-radius: 100px;
    font-size: sizeIncrease($min: 24, $max: 24);
    line-height: 140%;
    background-color: #FFE34F;
  }
  &__old-price {
    font-size: sizeIncrease($min: 24, $max: 24);
    line-height: sizeIncrease($min: 29, $max: 29);
    text-decoration-line: line-through;
    color: $color-text-3;
  }
}
</style>
