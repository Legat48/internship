<template>
  <div class="rating">
    <ul class="rating__list">
      <li v-for="star in starArr" :key="star.id" class="rating__item" :class="{'rating__item_active' : star.active}">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.43518 0.422328C8.95214 -0.140776 9.84028 -0.140776 10.3572 0.422328L13.4504 3.79164C13.5683 3.92007 13.7108 4.02356 13.8693 4.096L18.0296 5.99661C18.7249 6.31425 18.9993 7.15893 18.6235 7.82459L16.375 11.8075C16.2893 11.9594 16.2348 12.1268 16.215 12.3L15.693 16.844C15.6057 17.6034 14.8872 18.1254 14.138 17.9737L9.65511 17.066C9.48424 17.0314 9.30817 17.0314 9.13731 17.066L4.65444 17.9737C3.90523 18.1254 3.18671 17.6034 3.09947 16.844L2.57747 12.3C2.55757 12.1268 2.50316 11.9594 2.41746 11.8075L0.168895 7.82459C-0.206901 7.15893 0.0675503 6.31425 0.762842 5.99661L4.92309 4.096C5.08166 4.02356 5.22411 3.92006 5.34201 3.79164L8.43518 0.422328Z" fill="#D9D9D9" />
        </svg>
      </li>
    </ul>
  </div>
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
.rating {
  &__item {
    width: rem($n: 18);
    height: rem($n: 18);
    &_active {
      path {
        fill: #2CBD3F;
      }
    }
  }
}
</style>
