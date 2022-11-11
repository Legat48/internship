<template>
  <ul class="rating-star">
    <li
      v-for="star in starArr"
      :key="star.id"
      class="rating-star__item"
      :class="{'rating-star__item_active' : star.active}"
      v-html="require('@/assets/img/star.svg?raw')"
    />
  </ul>
</template>

<script>

export default {
  props: {
    rating: {
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
.rating-star {
  display: flex;
  gap: sizeIncrease($min: 8, $max: 8);
  &__item {
    width: sizeIncrease($min: 18, $max: 18);
    height: sizeIncrease($min: 18, $max: 18);
    &_active:deep() {
       path {
        fill: $color-svg-active;
      }
    }
  }
}
</style>
