<template>
  <div class="rewiews">
    <reviews-form class="rewiews__form" />
    <ul class="rewiews__list">
      <base-review
        v-for="(review, index) in reviewArr"
        :key="index"
        class="rewiews__rewiew"
        :review="review"
      />
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    reviewArr: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.rewiews {
  display: flex;
  flex-direction: column;
  gap: sizeIncr($min: 24, $max: 46);
  max-width: 1200px;
  &__form {
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: sizeIncr($min: 16, $max: 22);
  }
}
</style>
