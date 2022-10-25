<template>
  <div class="demo">
    <label
      v-for="component in componentArr"
      :key="component.id"
    ><input v-model="current" type="radio" :value="component.value">
      {{ component.title }}
    </label>
    <KeepAlive>
      <component :is="current" :characteristic-arr="characteristicArr" />
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
    characteristicArr: {
      type: Array,
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
