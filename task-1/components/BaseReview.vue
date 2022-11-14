<template>
  <div class="review">
    <reating-star class="review__stars" :reating="review.rating" />
    <h3 class="review__title">
      {{ review.name }}
      <span class="review__title-subtext">
        {{ review.data }}
      </span>
    </h3>
    <p class="review__text">
      {{ review.text }}
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
  border: 1px solid #D9D9D9;
  padding: sizeIncr($min: 24, $max: 24);
  gap: sizeIncr($min: 12, $max: 16);
  &__stars {

  }
  &__title {
    font-weight: 500;
    font-size: sizeIncr($min: 18, $max: 18);
    &-subtext {
      color: $color-text-2;
    }
  }
  &__text {
    font-family: 'Inter', sans-serif ;
    font-size: sizeIncr($min: 14, $max: 14);
    color: $color-text-2;
  }
}
</style>
