<template>
  <button class="rating btn">
    <reating-star :rating="rating" />
    <p class="rating__text">
      {{ amountReview }} отзывов
    </p>
  </button>
</template>

<script>

export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
    amountReview: {
      type: Number,
      default: 0
    }
  },
  computed: {
    starArr () {
      let rating = this.rating
      const starArr = [
        {
          id: 1,
          active: false
        },
        {
          id: 2,
          active: false
        },
        {
          id: 3,
          active: false
        },
        {
          id: 4,
          active: false
        },
        {
          id: 5,
          active: false
        }
      ]
      starArr.forEach((e) => {
        if (rating >= 1) {
          e.active = true
          rating -= 1
        }
      })
      return starArr
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: center;
  gap: sizeIncr($min: 8, $max: 8);
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  padding: sizeIncr($min: 8, $max: 8) sizeIncr($min: 12, $max: 12);
  &__text {
    font-family: 'Inter', sans-serif ;
    font-size: sizeIncr($min: 14, $max: 14);
    color: $color-text-2;
  }
}
</style>
