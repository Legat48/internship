<!-- <template>
  <swiper
    class="swiper"
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(img , index) in imgArr" :key="index" class="swiper__slide">
      <img
        :src="require(`~/assets/img/${img}`)"
        alt="Изображение товара"
        class="swiper__img"
      >
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from '@/node_modules/swiper/vue'

// Import Swiper styles
// import 'swiper/css'

export default {
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  props: {
    imgArr: {
      type: Array,
      required: true
    }
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
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
</style> -->
<template>
  <div class="swiper ">
    <div class="swiper__nav">
      <div class="swiper__pagination" />
      <div
        class="swiper__btn swiper__btn_next svg-box btn"
        v-html="require('@/assets/img/arrow-down.svg?raw')"
      />
    </div>
    <div class="swiper__swiper">
      <div class="swiper__wrap swiper-wrapper">
        <div v-for="(img , index) in imgArr" :key="index" class="swiper__slide swiper-slide">
          <img
            :src="require(`~/assets/img/${img}`)"
            alt="Изображение товара"
            class="swiper__img"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination } from 'swiper'

export default {
  props: {
    imgArr: {
      type: Array,
      required: true
    }
  },
  mounted () {
    const imgData = this.imgArr
    function img (index) {
      return `<img src="/_nuxt/assets/img/${imgData[index]}" alt="Изображение товара" class="swiper__img" >`
    }
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper__swiper', {
      loop: false,
      slidesPerView: 'auto',
      grabCursor: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="swiper__pagination-item btn ' + className + '">' + img(index) + '</span>'
        }
      },
      navigation: {
        nextEl: '.swiper__btn_next'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  display: flex;
  gap: rem($n: 20);
  &__swiper {
    width: rem($n: 708);
    overflow: hidden;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    gap: rem($n: 16);
    width: rem($n: 126);
  }
  &__pagination {
    display: flex;
    flex-direction: column;
    gap: rem($n: 16);
  }
  &__pagination-item {
    max-height: rem($n: 116);
  }
  &__wrap {
    width: rem($n: 708);
  }
  &__btn:deep() {
    padding: rem($n: 16);
    svg {
      width: rem($n: 16);
      height: rem($n: 16);
    }
  }
}
</style>
