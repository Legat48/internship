<template>
  <div class="wrap">
    <h1 class="title">
      Комод "Абрис"
    </h1>
    <div class="product">
      <div class="product__wrap">
        <ProductGalletySwiper class="product__swiper" :img-arr="product.imgArr" />
        <form class="product__form" @submit.prevent="test()">
          <BaseRating
            class="product__rating"
            :rating="product.rating"
            :amount-review="product.amountReview"
          />
          <div class="product__wrap-info">
            <div class="product__wrap-price">
              <strong class="product__price">
                {{ Math.round( product.price * ((100 - product.sale) / 100)) | numberFormat }}р
              </strong>
              <div class="product__sale">
                -{{ product.sale }}%
              </div>
              <p class="product__old-price">
                {{ product.price | numberFormat }}р
              </p>
            </div>
            <div class="product__wrap-info-btn">
              <button class="product__info-btn btn">
                <svg
                  class="product__info-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001 4.52898C14.35 2.41998 17.98 2.48998 20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C6.02201 2.49298 9.64501 2.41698 12.001 4.52898ZM18.827 6.16998C17.327 4.66798 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09101 4.60598 6.67601 4.66798 5.17201 6.17198C3.68201 7.66198 3.60701 10.047 4.98001 11.623L12 18.654L19.02 11.624C20.394 10.047 20.319 7.66498 18.827 6.16998Z" fill="#CBCBCB" />
                </svg>
              </button>
              <button class="product__info-btn btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z" fill="#CBCBCB" />
                </svg>
              </button>
            </div>
          </div>
          <PropertySelection
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
      <BaseTabs class="product__tabs" :characteristic="product.characteristic" />
    </div>
  </div>
</template>

<script>
import BaseTabs from '@/components/BaseTabs.vue'
import ProductGalletySwiper from '@/components/ProductGalletySwiper.vue'
import PropertySelection from '@/components/PropertySelection.vue'
import BaseRating from '@/components/BaseRating.vue'

import numberFormat from '@/helpers/numberFormat'

export default {
  components: {
    ProductGalletySwiper,
    PropertySelection,
    BaseRating,
    BaseTabs
  },
  filters: {
    numberFormat
  },
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
.wrap {
  padding: 90px;
}
.title {
  margin-bottom: rem($n: 24);
  font-weight: 500;
  font-family: 'Geometria', sans-serif ;
  font-size: 1.5rem;
  line-height: 2.125rem;
}
.product {
  &__wrap {
    display: grid;
    grid-template-columns: rem($n: 856) 1fr;
    gap: rem($n: 20);
    margin-bottom: rem($n: 67);
  }
  &__swiper {
    max-height: rem($n: 641);
  }
  &__form {
    width: 100%;
  }
  &__rating {
    margin-bottom: rem($n: 16);
  }
  &__wrap-info {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
  &__wrap-price {
    display: flex;
    align-items: center;
    gap: rem($n: 24);
    margin-right: auto;
  }
  &__price {
    font-weight: 500;
    font-family: 'Geometria', sans-serif ;
    font-size: 2rem;
    line-height: 140%;
  }
  &__sale {
    padding: 2px 8px;
    border-radius: 100px;
    font-size: 1.5rem;
    line-height: 140%;
    background-color: #FFE34F;
  }
  &__old-price {
    font-size: 1.5rem;
    line-height: 1.875rem;
    text-decoration-line: line-through;
    color: $color-text-3;
  }
  &__wrap-info-btn {
    display: flex;
    gap: rem($n: 16);
  }
  &__info-btn {
    @include flexCenter;
    width: rem($n: 72);
    height: rem($n: 72);
    background-color: rgba(0, 0, 0, 0.02);
    svg {
      width: rem($n: 20);
      height: rem($n: 20);
    }
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
