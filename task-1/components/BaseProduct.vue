<template>
  <div class="product">
    <h1 class="product__title">
      Кресло "Папасан" без ротанга
    </h1>
    <div class="product__wrap">
      <product-galletySwiper class="product__swiper" :img-arr="product.imgArr" />
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
    <base-tabs class="product__tabs" :characteristic="product.characteristic" />
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
  },
  methods: {
    test () {
      alert('testForm')
    },
    test2 () {
      alert('testForm2')
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  &__title {
  margin-bottom: rem($n: 24);
  font-weight: 500;
  font-family: 'Geometria', sans-serif ;
  font-size: 1.5rem;
  line-height: 2.125rem;
  }
  &__wrap {
    inset: 1px 1px 1px 1px;
    display: flex;
    gap: rem($n: 20);
    margin-bottom: rem($n: 67);
    @include  respond-to(mobile) {
      flex-direction: column;
    }
  }
  &__swiper {
    width: rem($n: 856);
    max-height: rem($n: 641);
    @include  respond-to(mobile) {
      width: 100%;
      max-height: auto;

    }
  }
  &__form {
    width: 50%;
  }
  &__rating {
    margin-bottom: rem($n: 14);
  }
  &__wrap-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  &__selection {
    margin-bottom: rem($n: 48);
    &_delivery {
      margin-bottom: rem($n: 16);
    }
  }
  &__wrap-btn {
    display: flex;
    gap: rem($n: 20);
    width: 100%;
  }
  &__btn {
    padding: rem($n: 24);
    border-radius: 2px;
    width: 50%;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.875rem;
    &_add {
      color: $color-text-btn-1;
      background-color: $color-bg-btn;
    }
    &_fast-add {
      color: $color-text-btn-2;
      border: 1px solid $color-border;
    }
  }
}
</style>
