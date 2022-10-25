<template>
  <hooper class="swiper">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    <slide>
      slide 3
    </slide>
    <slide>
      slide 4
    </slide>
    <slide>
      slide 5
    </slide>
    <slide>
      slide 6
    </slide>
    <hooper-pagination slot="hooper-addons" />
    <hooper-navigation slot="hooper-addons" />
  </hooper>
</template>

<script>
// import 'hooper/dist/hooper.css'

import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  width: rem($n: 856);
  background-color: red;
  &__nav {
    margin-right: rem($n: 20);
    width: rem($n: 126);
  }
  &__wrap {
    width: rem($n: 708);
  }
}
</style>
