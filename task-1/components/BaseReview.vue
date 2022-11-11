<template>
  <div class="review">
    <reating-star class="review__stars" :reating="review.rating" />
    <h3 class="review__title">
      {{ review.name }}
      <span class="review__title-sabtext">
        {{ review.data }}
      </span>
    </h3>
    <p class="review__text">
      Очень довольны покупкой в этом магазине. Цена и качество хорошие. Сотрудники работающие в этой организации вежливые и культурные. Впечатление от этого магазина на пять баллов.
    </p>
  </div>
</template>

<script>

export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.review {
  display: flex;
  flex-direction: column;
  &__stars {
    display: flex;
    gap: sizeIncrease($min: 8, $max: 8);
  }
  &__title {
    width: sizeIncrease($min: 18, $max: 18);
    height: sizeIncrease($min: 18, $max: 18);
    &_active:deep() {
       path {
        fill: $color-svg-active;
      }
    }
  }
  &__text {
    font-family: 'Inter', sans-serif ;
    font-size: sizeIncrease($min: 14, $max: 14);
    color: $color-text-2;
  }
}
</style>
