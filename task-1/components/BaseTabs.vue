<template>
  <div class="tabs">
    <div class="tabs__header">
      <button
        class="tabs__btn btn"
        :class="[ activeComponent === 'characteristic' ? 'tabs__btn_active' : '' ]"
        @click.prevent="tabsFunc('characteristic')"
      >
        Характеристики
      </button>
      <button
        class="tabs__btn btn"
        :class="[ activeComponent === 'reviews' ? 'tabs__btn_active' : '' ]"
        @click.prevent="tabsFunc('reviews')"
      >
        Отзывы покупателей
      </button>
    </div>
    <product-characteristic
      class="tabs__content tabs__content_characteristic"
      :class="[ activeComponent === 'characteristic' ? 'tabs__content_active' : '' ]"
      :characteristic="product.characteristic"
    />
    <product-reviews
      class="tabs__content tabs__content_reviews"
      :class="[ activeComponent === 'reviews' ? 'tabs__content_active' : '' ]"
      :review-arr="product.reviewArr"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeComponent: 'characteristic'
    }
  },
  methods: {
    tabsFunc (component) {
      this.activeComponent = component
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
      @media (max-width: $tablet) {
        display: none;
      }
    }
    &__btn {
      font-weight: 500;
      font-size: sizeIncr($min: 24, $max: 34);
      color: $color-text-2;
      opacity: 0.7;
      @include transition;
      &_active {
        color: $color-text-1;
        opacity: 1;
      }
    }
    &__content {
      display: none;
      @media (max-width: $tablet) {
        display: flex;
      }
      &_active {
        display: flex;
      }
    }
    &__text {
    }
  }
</style>
