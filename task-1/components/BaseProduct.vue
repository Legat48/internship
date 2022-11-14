<template>
  <div class="product">
    <h1 class="product__title">
      Кресло "Папасан" без ротанга
    </h1>
    <div class="product__wrap">
      <product-gallety-swiper class="product__swiper" :img-arr="product.imgArr" />
      <form class="product__form" @submit.prevent="test()">
        <base-rating
          class="product__rating"
          :rating="product.rating"
          :amount-review="product.amountReview"
        />
        <div class="product__wrap-info">
          <product-price :product="product" />
          <product-wrap-info-btn class="product__wrap-info-btn" />
        </div>
        <property-selection
          v-for="property in product.propertyArr"
          :key="property.id"
          class="product__selection"
          :class="[ property.subclass === 'property_delivery' ? 'product__selection_delivery' : '' ]"
          :property="property"
        />
        <div class="product__wrap-btn">
          <button class="product__btn product__btn_add btn" type="submit">
            В корзину
          </button>
          <button class="product__btn product__btn_fast-add btn" type="button" @click.prevent="test2()">
            Купить в клик
          </button>
        </div>
      </form>
    </div>
    <base-tabs class="product__tabs" :product="product" />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  &__title {
    margin-bottom: sizeIncr($min: 20, $max: 38);
    font-weight: 500;
    font-family: 'Geometria', sans-serif ;
    font-size: sizeIncr($min: 24, $max: 24);;
    line-height: 140%;
  }
  &__wrap {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: sizeDecr($min: 20, $max: 38);
    margin-bottom: sizeIncr($min: 36, $max: 67);
    width: 100%;
    @include  respond-to(mobile) {
      padding-top: 58px;
      grid-template-columns: 1fr;
    }
  }
  &__swiper {
    width: 100%;
    @include  respond-to(mobile) {
    }
  }
  &__form {
  }
  &__rating {
    margin-bottom: sizeIncr($min: 15, $max: 24);
    @include  respond-to(mobile) {
      position: absolute;
      inset: 0 0 auto 0;
    }
  }
  &__wrap-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  &__selection {
    margin-bottom: sizeIncr($min: 24, $max: 48);
    &_delivery {
      margin-bottom: sizeIncr($min: 0, $max: 16);
    }
  }
  &__wrap-btn {
    display: flex;
    gap: sizeIncr($min: 20, $max: 20);
    width: 100%;
  }
  &__btn {
    padding: sizeIncr($min: 16, $max: 24);
    border-radius: 2px;
    width: 50%;
    font-family: 'Inter';
    font-weight: 400;
    font-size: sizeIncr($min: 12, $max: 24);
    line-height: sizeIncr($min: 15, $max: 29);
    color: $color-text-btn-1;
    background-color: $color-bg-btn;
    &_fast-add {
      color: $color-text-btn-2;
      border: 1px solid $color-border;
    }
  }
}
</style>
