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
