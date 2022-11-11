<template>
  <div class="rewiews">
    <base-review class="rewiews__rewiew" :review="review" />
  </div>
</template>

<script>

export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
