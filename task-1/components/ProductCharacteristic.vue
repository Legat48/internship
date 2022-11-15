
<template>
  <div class="characteristic">
    <h2 class="characteristic__title">
      Характеристики
    </h2>
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
        <h3 class="characteristic__subtitle">
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
  flex-direction: column;
  gap: sizeIncr($min: 8, $max: 20);
  &__title {
    display: none;
    font-weight: 500;
    font-size: sizeIncr($min: 24, $max: 34);
    color: $color-text-1;
    @media (max-width: $tablet) {
      display: flex;
    }
  }
  &__link-file {
    display: flex;
    align-items: center;
    gap: sizeIncr($min: 8, $max: 8);
    margin-right: auto;
    padding: sizeIncr($min: 16, $max: 16);
    border-radius: 6px;
    font-size: sizeIncr($min: 14, $max: 24);
    line-height: 140%;
    color: $color-text-2;
    background-color: rgba(0, 0, 0, 0.02);
    svg {
      width: sizeIncr($min: 24, $max: 24);
      height: sizeIncr($min: 24, $max: 24);
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    column-gap: sizeIncr($min: 16, $max: 16);
    padding: sizeIncr($min: 16, $max: 16);
    margin-bottom: sizeIncr($min: 24, $max: 53);
  }
  &__item {
    display: flex;
    border-bottom: 1px solid #F3F3F3;
    padding: sizeIncr($min: 8, $max: 16) 0;
    width: calc(50% - sizeIncr($min: 8, $max: 20));
    font-size: sizeIncr($min: 14, $max: 24);
    line-height: 140%;
    @include  respond-to(mobile) {
      width: 100%;
    }
    &_active {
      path {
        fill: #2CBD3F;
      }
    }
  }
  &__subtitle {
    width: 50%;
    font-weight: 500;
    font-size: sizeIncr($min: 14, $max: 24);
    line-height: 140%;
  }
  &__value {
    width: 50%;
    color: $color-text-2;
  }
  &__link {
    margin-right: auto;
    font-size: sizeIncr($min: 18, $max: 24);
    line-height: 140%;
    color: $color-text-btn-3;
    text-decoration-line: underline;
  }
}
</style>
