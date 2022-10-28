<template>
  <button class="rating btn">
    <ul class="rating__list">
      <li
        v-for="star in starArr"
        :key="star.id"
        class="rating__item"
        :class="{'rating__item_active' : star.active}"
        v-html="require('@/assets/img/star.svg?raw')"
      />
    </ul>
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
  gap: rem($n: 16);
  padding: rem($n: 8) rem($n: 12);
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  &__list {
    display: flex;
    gap: rem($n: 8);
  }
  &__item {
    width: rem($n: 18);
    height: rem($n: 18);
    &_active:deep() {
       path {
        fill: $color-svg-active;
      }
    }
  }
  &__text {
    font-family: 'Inter', sans-serif ;
    font-size: 0.875rem;
    color: $color-text-2;
  }
}
</style>
