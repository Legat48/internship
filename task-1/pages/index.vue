<template>
  <div class="wrap">
    <base-product />
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 90px;
  @include  respond-to(mobile) {
    padding:  90px 0px;
  }
}

</style>
