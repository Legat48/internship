
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
  gap: sizeIncrease($min: 8, $max: 20);
  &__link-file {
    display: flex;
    align-items: center;
    gap: sizeIncrease($min: 8, $max: 8);
    margin-right: auto;
    padding: sizeIncrease($min: 16, $max: 16);
    border-radius: 6px;
    font-size: sizeIncrease($min: 14, $max: 24);
    line-height: 140%;
    color: $color-text-2;
    background-color: rgba(0, 0, 0, 0.02);
    svg {
      width: sizeIncrease($min: 24, $max: 24);
      height: sizeIncrease($min: 24, $max: 24);
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    column-gap: sizeIncrease($min: 16, $max: 16);
    padding: sizeIncrease($min: 16, $max: 16);
    margin-bottom: sizeIncrease($min: 24, $max: 53);
  }
  &__item {
    display: flex;
    border-bottom: 1px solid #F3F3F3;
    padding: sizeIncrease($min: 8, $max: 16) 0;
    width: calc(50% - sizeIncrease($min: 8, $max: 20));
    font-size: sizeIncrease($min: 14, $max: 24);
    line-height: 140%;
    &_active {
      path {
        fill: #2CBD3F;
      }
    }
  }
  &__title {
    width: 50%;
    font-weight: 500;
    font-size: sizeIncrease($min: 14, $max: 24);
    line-height: 140%;
  }
  &__value {
    width: 50%;
    color: $color-text-2;
  }
  &__link {
    margin-right: auto;
    font-size: sizeIncrease($min: 18, $max: 24);
    line-height: 140%;
    color: $color-text-btn-3;
    text-decoration-line: underline;
  }
}
</style>
