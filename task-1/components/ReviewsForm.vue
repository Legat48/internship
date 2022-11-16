<template>
  <div class="rewiews">
    <form action="#" class="rewiew-form">
      <h2 class="rewiew-form__title">
        Написать отзыв
      </h2>
      <textarea
        class="rewiew-form__textarea"
        name="name"
        placeholder="Меня зовут"
      />
      <textarea
        class="rewiew-form__textarea rewiew-form__textarea_content"
        name="content"
        placeholder="Введите свой отзыв"
      />
      <div class="rewiew-form__wrap-bot">
        <div class="rewiew-form__rating">
          <h3 class="rewiew-form__rating-title">
            Моя оценка
          </h3>
          <reating-star :rating="3" />
        </div>
        <button class="rewiew-form__btn btn">
          Оставить отзыв
        </button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.rewiew-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  &__title {
    font-weight: 500;
    font-size: sizeIncr($min: 24, $max: 24);
    line-height: 140%;
  }
  &__textarea {
    border: 1px solid #CBCBCB;
    padding: sizeIncr($min: 24, $max: 24);
    width: 100%;
    font-size: sizeIncr($min: 14, $max: 14);
    line-height: sizeIncr($min: 17, $max: 17);
    &_content {
      min-height: 120;
    }
  }
  &__wrap-bot {
    display: flex;
    justify-content: space-between;
  }
  &__rating {
    display: flex;
    flex-direction: column;
  }
  &__rating-title {
    margin-bottom: sizeIncr($min: 16, $max: 16);
    font-weight: 500;
    font-size: sizeIncr($min: 18, $max: 18);
  }
  &__btn {
    padding: sizeIncr($min: 18, $max: 18) sizeIncr($min: 24, $max: 24);
    border-radius: 2px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: sizeIncr($min: 14, $max: 18);
    line-height: sizeIncr($min: 17, $max: 22);
    color: $color-text-btn-1;
    background-color: $color-bg-btn;
  }
}
</style>
