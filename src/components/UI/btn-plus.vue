<template>
  <div class="btn-plus">
    <span class="btn-plus__dash-left"></span>
    <span class="btn-plus__dash-right"></span>
  </div>
</template>

<script>
export default {
  name: "btn-plus"
}
</script>

<style lang="scss" scoped>
.btn-plus {
  @include btnPlus;

  @include hasParent('.isDisable') {
    display: none;
  }

  &__dash-left {
    @include dashHorizon;
    background-color: $colorWhite;
  }

  &__dash-right {
    @include dashVertical;
    background-color: $colorWhite;
  }

  &:hover &__dash-left {
    transform: rotate(90deg);
    transition: 0.2s ease-in;
  }

  &:hover &__dash-right {
    transform: rotate(180deg);
    transition: 0.2s ease-in;
  }
}
</style>
