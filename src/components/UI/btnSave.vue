<template>
  <div class="btn-save" v-bind="$attrs">
    <div class="btn-save__wrp">
      <button class="btn-save__save" @click="$emit('save')">Сохранить</button>
      <button class="btn-save__ok" @click="$emit('okay')">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['save', 'okay']
}
</script>

<style lang="scss" scoped>
.btn-save {
  &__wrp {
    @include flexCentrJust;
  }

  &__save {
    width: 133px;
    height: 52px;
    margin-right: 10px;
    @include flexCentrJust;
    background-color: $mainColor;
    color: $colorWhite;
    text-transform: uppercase;
    border-radius: $borderRadius;
  }

  &__ok {
    width: 69px;
    height: 52px;
    @include flexCentrJust;
    border-radius: $borderRadius;
    border: 1px solid $mainColor;
  }

}
</style>
