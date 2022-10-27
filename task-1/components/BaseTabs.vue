<template>
  <div class="tabs">
    <div class="tabs__header">
      <label
        v-for="component in componentArr"
        :key="component.id"
        class="tabs__label"
      >
        <input v-model="current" class="visually-hidden" type="radio" :value="component.value">
        {{ component.title }}
      </label>
    </div>
    <KeepAlive class="tabs__content">
      <component :is="current" class="tabs__component" :characteristic="characteristic" />
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
    characteristic: {
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
      gap: rem($n: 29);
      margin-bottom: 32px;
    }
    &__label {
      font-weight: 500;
      font-size: 1.5rem;
    }
    &__text {
    }
  }
</style>
