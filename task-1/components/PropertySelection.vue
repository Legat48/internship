<template>
  <div class="property" :class="[ property.subclass ? property.subclass : '' ]">
    <h3 class="property__title">
      {{ property.title }}
    </h3>
    <ul class="property__options">
      <li v-for="option in property.optionArr" :key="option.id" class="property__item">
        <label
          class="property__label"
          :class="[ idSelectedOption === option.id ? 'property__label_active' : '' ]"
        >
          <img
            :src="require(`~/assets/img/${option.img}`)"
            :alt="property.title"
            class="property__img"
          >
          <input
            v-model="idSelectedOption"
            class="visually-hidden"
            type="radio"
            :name="property.name"
            :value="option.id"
          >
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
  },
  data () {
    return {
      idSelectedOption: ''
    }
  },
  mounted () {
    this.idSelectedOption = this.property.optionArr[0].id
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
      gap: sizeDecrease($min: 8, $max: 15);
      width: 100%;
    }
    .property__item {
      width: 50%;
    }
    .property__label {
      padding: sizeIncrease($min: 24, $max: 24);
    }
    .property__img {
      width: sizeIncrease($min: 24, $max: 24);
      height: sizeIncrease($min: 24, $max: 24);
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
    gap: sizeDecrease($min: 8, $max: 15);
  }
  &__item {
    border: 1px solid $color-border;
    border-radius: 4px;
    overflow: hidden;
  }
  &__label {
    display: flex;
    align-items: center;
    gap: sizeDecrease($min: 16, $max: 16);
    padding: sizeDecrease($min: 8, $max: 12);
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
    @include transition;
    &_active {
      border: 1px solid $color-bg-btn;
    }
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
