<template>
  <div class="property" :class="[ property.subclass ? property.subclass : '' ]">
    <h3 class="property__title">
      {{ property.title }}
    </h3>
    <ul class="property__options">
      <li v-for="option in property.optionArr" :key="option.id" class="property__item">
        <label class="property__label">
          <img
            :src="require(`~/assets/img/${option.img}`)"
            :alt="property.title"
            class="property__img"
          >
          <input v-model="option.id" class="visually-hidden" type="radio" :name="property.name">
          <span class="property__value">
            {{ option.title }}
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    property: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.property {
  display: flex;
  flex-direction: column;
  gap: rem($n: 8);
  width: 100%;
  &_delivery {
    .property__options {
      gap: rem($n: 20);
      width: 100%;
    }
    .property__item {
      width: 50%;
    }
    .property__label {
      padding: rem($n: 24) rem($n: 20) rem($n: 24) rem($n: 24);
    }
    .property__img {
      width: rem($n: 24);
      height: rem($n: 24);
    }
  }
  &__title {
    font-weight: 500;
    font-family: 'Geometria', sans-serif ;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }
  &__options {
    display: flex;
    gap: rem($n: 8);
  }
  &__item {
    border: 1px solid $color-border;
    border-radius: 4px;
    overflow: hidden;
  }
  &__label {
    display: flex;
    align-items: center;
    gap: rem($n: 16);
    padding: 8px 24px 8px 8px;
    width: 100%;
    height: 100%;
    input {
      display: none;
    }
  }
  &__img {
    width: rem($n: 44);
    height: rem($n: 44);
  }
}
</style>
