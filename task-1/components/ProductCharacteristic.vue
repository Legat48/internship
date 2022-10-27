
<template>
  <div class="characteristic">
    <a
      :href="characteristic.fileLink.link"
      class="characteristic__link-file"
    >
      <div class="svg-box" v-html="require('@/assets/img/file.svg?raw')" />
      <div class="characteristic__link-file-title">

        {{ characteristic.fileLink.title }}
      </div>
    </a>
    <ul class="characteristic__list">
      <li
        v-for="property in characteristic.propertyArr"
        :key="property.id"
        class="characteristic__item"
      >
        <h3 class="characteristic__title">
          {{ property.title }}
        </h3>
        <p class="characteristic__value">
          {{ property.value }}
        </p>
      </li>
    </ul>
    <button class="characteristic__link btn">
      Смотреть все характеристики
    </button>
  </div>
</template>

<script>

export default {
  props: {
    characteristic: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.characteristic {
  display: flex;
  flex-direction: column;
  gap: rem($n: 32);
  &__link-file {
    display: flex;
    align-items: center;
    gap: rem($n: 8);
    margin-right: auto;
    padding: rem($n: 16);
    font-size: 1.5rem;
    line-height: 140%;
    color: $color-text-2;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 6px;
    svg {
      width: rem($n: 24);
      height: rem($n: 24);
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: rem($n: 20);
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: calc(50% - rem($n: 20));
    font-size: 1.5rem;
    line-height: 140%;
    &_active {
      path {
        fill: #2CBD3F;
      }
    }
  }
  &__title {
    font-weight: 500;
  }
  &__value {
    color: $color-text-2;
  }
  &__link {
    margin-right: auto;
    font-size: 1.5rem;
    line-height: 140%;
    color: $color-text-btn-3;
    text-decoration-line: underline;
  }
}
</style>
