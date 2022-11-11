<template>
  <div class="swiper ">
    <div class="swiper__nav">
      <button
        class="swiper__btn swiper__btn_up swiper__btn_deactive svg-box btn"
        @click.prevent="scrollUp()"
        v-html="require('@/assets/img/arrow-down.svg?raw')"
      />
      <div class="swiper__pagination" />
      <button
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
  computed: {

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
    const wrap = document.querySelector('.swiper__pagination')
    const btnUp = document.querySelector('.swiper__btn_up')
    wrap.addEventListener('scroll', (e) => {
      if (wrap.scrollTop === 0) {
        btnUp.classList.add('swiper__btn_deactive')
      } else {
        btnUp.classList.remove('swiper__btn_deactive')
      }
    })
  },
  methods: {
    // скролл вниз
    scrollUp () {
      const wrap = document.querySelector('.swiper__pagination')
      const scrollDown = () => {
        wrap.scrollTop = wrap.scrollTop - 7
      }
      // eslint-disable-next-line no-use-before-define
      clearInterval(scrollInterval)
      const scrollInterval = setInterval(scrollDown, 10)
      setTimeout(() => {
        clearInterval(scrollInterval)
      }, 200)
    },
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
  gap: sizeIncrease($min: 12, $max: 12);
  @include  respond-to(mobile) {
    flex-direction: column-reverse;
  }
  &__swiper {
    width: sizeIncrease($min: 374, $max: 708);
    overflow: hidden;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    gap: sizeIncrease($min: 20, $max: 20);
    width: sizeIncrease($min: 134, $max: 134);
    @include  respond-to(mobile) {
      flex-direction: row;
      width: auto;
      height: sizeIncrease($min: 134, $max: 134);
    }
  }
  &__pagination {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: sizeIncrease($min: 16, $max: 16);
    height: sizeIncrease($min: 450, $max: 574);
    overflow-y: scroll;
    @include  respond-to(mobile) {
      flex-direction: row;
      overflow-y: auto;
      overflow-x: scroll;
      height: 100%;
      background-color: red;
    }
  }
  &__wrap {
    width: sizeIncrease($min: 374, $max: 708);
    width: 100%;

  }
  &__btn:deep() {
    padding: rem($n: 16);
    svg {
      width: rem($n: 16);
      height: rem($n: 16);
    }
  }
  &__btn {
    &_up {
      position: absolute;
      top: 5px;
      left: 5.6%;
      z-index: 2;
      padding: 0;
      border: 1px solid $color-bg-btn;
      border-radius: 1000px;
      width: sizeIncrease($min: 25, $max: 40);
      height: sizeIncrease($min: 25, $max: 40);
      transform: rotate(180deg);
      background-color: #fff;
    }
    &_deactive {
      transform: translateY(-150%) rotate(180deg);
    }
  }
  &__img {
    object-fit: cover;
    @include imgSwap;
  }

}

</style>
<style lang="scss">
// Такой код прописан в файле 'styles/scss/substyle/common'
  .swiper__pagination .swiper-pagination-bullet-active {
    position: relative;
    &::after{
        content: '';
        position: absolute;
        border: 3px solid #2CBD3F ;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      .swiper__pagination .swiper__pagination-item img{
        @include imgSwap;
      }
    }
</style>
