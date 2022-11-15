<template>
  <div class="counter">
    <button
      class="counter__btn btn"
      type="button"
      aria-label="Убрать один товар"
      @click.prevent="changeAmount(-1)"
    >
      -
    </button>
    <label class="counter__label">
      <input
        v-model.number="curAmount"
        class="counter__input"
        type="text"
        name="count"
      >
    </label>

    <button
      class="counter__btn btn"
      type="button"
      aria-label="Добавить один товар"
      @click.prevent="changeAmount(1)"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'productAmount',
    event: 'productAmount'
  },
  props: {
    productAmount: {
      type: Number,
      default: 1
    }
  },
  data () {
    return { curAmount: this.productAmount }
  },
  watch: {
    curAmount (value) {
      if (value >= 1) {
        this.$emit('productAmount', value)
      }
    }
  },
  methods: {
    changeAmount (value) {
      this.curAmount += value
      if (this.curAmount > 0) {
        this.$emit('productAmount', this.productAmount + value)
      } else {
        this.curAmount = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  &__label {
    border: 1px solid $color-border;
  }
  &__input {
    border: none;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
  }
  &__btn {
    border-radius: 2px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: sizeIncr($min: 12, $max: 24);
    line-height: sizeIncr($min: 15, $max: 29);
    color: $color-text-btn-1;
    background-color: $color-bg-btn;
  }
}
</style>
