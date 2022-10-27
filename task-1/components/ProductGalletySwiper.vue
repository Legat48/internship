<template>
  <div class="swiper">
    <button @click.prevent="slideNext">
      prev
    </button>
    <hooper class="swiper__swiper">
      <slide v-for="(img , index) in imgArr" :key="index" class="swiper__slide">
        <img
          :src="require(`~/assets/img/${img}`)"
          alt="Изображение товара"
          class="swiper__img"
        >
      </slide>
      <hooper-pagination slot="hooper-addons" />
    </hooper>
  </div>
</template>

<script>

import {
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  props: {
    imgArr: {
      type: Array,
      required: true
    }
  },
  methods: {
    slideNext () {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  &__nav {
    margin-right: rem($n: 20);
    width: rem($n: 126);
  }
  &__wrap {
    width: rem($n: 708);
  }
}
</style>
