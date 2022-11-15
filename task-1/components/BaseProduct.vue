<template>
  <div class="product">
    <h1 class="product__title">
      Кресло "Папасан" без ротанга
    </h1>
    <div class="product__wrap">
      <base-rating
        class="product__rating"
        :rating="product.rating"
        :amount-review="product.amountReview"
      />
      <product-gallety-swiper class="product__swiper" :img-arr="product.imgArr" />
      <form class="product__form" @submit.prevent="test()">
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "swiper rating"
                         "swiper form"  ;
    column-gap: sizeDecr($min: 20, $max: 38);
    margin-bottom: sizeIncr($min: 36, $max: 67);
    width: 100%;
    @media (max-width: $desktop) {
      display: flex;
      flex-direction: column;
      gap: sizeDecr($min: 20, $max: 38);
    }
  }
  &__swiper {
    width: 100%;
    grid-area: swiper;
  }
  &__rating {
    grid-area: rating;
    margin-bottom: sizeIncr($min: 15, $max: 24);
  }
  &__form {
    grid-area: form;

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
    @media (max-width: $tablet) {
      position: fixed;
      z-index: 9;
      inset: auto 0 0 0;
      flex-direction: row-reverse;
      padding: 16px;
      background-color: #fff;
      box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.25);
    };
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
      background-color: transparent;
    }
  }
}
</style>
