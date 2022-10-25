<template>
  <div class="characteristic">
    <ul class="characteristic__list">
      <li
        v-for="characteristic in characteristicArr"
        :key="characteristic.id"
        class="characteristic__item"
      >
        <h3 class="characteristic__title">
          {{ characteristic.title }}
        </h3>
        <p class="characteristic__text">
          {{ characteristic.value }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    characteristicArr: {
      type: Array,
      required: true
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
