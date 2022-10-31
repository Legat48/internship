<template>
  <div class="swiper ">
    <div class="swiper__nav">
      <div class="swiper__pagination" />
      <div
        class="swiper__btn swiper__btn_down svg-box btn"
        @click.prevent="scrollDown()"
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
import { Swiper, Pagination } from 'swiper'

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
      return `<img class="swiper__pagination-img" src="/_nuxt/assets/img/${imgData[index]}" alt="Изображение товара" class="swiper__img" >`
    }
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper__swiper', {
      loop: false,
      slidesPerView: 'auto',
      grabCursor: true,
      modules: [Pagination],
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="swiper__pagination-item btn ' + className + '" >' + img(index) + '</span>'
        }
      }
    })
  },
  methods: {
    // скролл вниз
    scrollDown () {
      const wrap = document.querySelector('.swiper__pagination')
      const scrollDown = () => {
        wrap.scrollTop = wrap.scrollTop + 7
      }
      // eslint-disable-next-line no-use-before-define
      clearInterval(scrollInterval)
      const scrollInterval = setInterval(scrollDown, 10)
      setTimeout(() => {
        clearInterval(scrollInterval)
      }, 200)
    }
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
    height: rem($n: 495);
    overflow-y: scroll;
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
  &__img {
   @include imgSwap;
  }
  // Такой код прописан в файле 'styles/scss/substyle/common'
  // .swiper__pagination .swiper-pagination-bullet-active {
    // position: relative;
    // &::after{
      //   content: '';
      //   position: absolute;
      //   border: 3px solid #2CBD3F ;
      //   top: 0;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   pointer-events: none;
      // }
      // .swiper__pagination .swiper__pagination-item img{
      //   @include imgSwap;
      // }
    }
</style>
