<template>
  <div class="tabs">
    <div class="tabs__header">
      <label
        v-for="component in componentArr"
        :key="component.id"
        class="tabs__label"
        :class="[ current === component.value ? 'tabs__label_active' : '' ]"
      >
        <input v-model="current" class="visually-hidden" type="radio" :value="component.value">
        {{ component.title }}
      </label>
    </div>
    <KeepAlive class="tabs__content">
      <component
        :is="current"
        class="tabs__component"
        :characteristic="product.characteristic"
        :review-arr="product.reviewArr"
      />
    </KeepAlive>
  </div>
</template>

<script>
import ProductCharacteristic from '@/components/ProductCharacteristic.vue'
import ProductReviews from '@/components/ProductReviews.vue'

export default {
  components: { ProductCharacteristic, ProductReviews },
  props: {
    componentArr: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            title: 'Характеристики',
            value: 'ProductCharacteristic'
          },
          {
            id: 2,
            title: 'Отзывы покупателей',
            value: 'ProductReviews'
          }]
      }
    },
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      current: 'ProductCharacteristic'
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs {
    &__header {
      display: flex;
      gap: sizeIncr($min: 8, $max: 29);
      margin-bottom: sizeIncr($min: 8, $max: 32);
    }
    &__label {
      font-size: sizeIncr($min: 24, $max: 34);
      color: $color-text-2;
      @include transition;
      &_active {
        font-weight: 500;
        color: $color-text-1;
      }
    }
    &__content {

    }
    &__text {
    }
  }
</style>
