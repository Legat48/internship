<template>
  <div class="property">
    <h3 class="property__title">
      Оплата
    </h3>
    <ul class="property__options">
      <li v-for="option in property.optionArr" :key="option.id" class="property__item">
        <label class="property__label">
          <input v-model="option.id" class="property__radio" type="radio" name="pay">
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
  &__options {
    display: flex;
  }
}
</style>
