<template>
  <div class="checkbox-wrp">
    <input
      type="checkbox"
      class="custom-checkbox"
      id="checkboxAllExport"
      name="happy"
      value="yes"
    />
    <label class="custom-checkbox__text" for="checkboxAllExport"
      >Выбрать все экспорты</label
    >
  </div>
</template>

<script>
export default {
    name: 'allExportsCheckbox'
}
</script>

<style lang="scss" scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  &__text {
    @include textUpper;
  }
}
.checkbox-wrp {
  padding-top: 24px;
  margin-bottom: 24px;
  position: relative;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: $borderRadius;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 1px solid $mainColor;
}
.custom-checkbox:checked + label::before {
  background-color: $mainColor;
  background-image: url("/icon/check-mark-all-brand-icon.svg");
}
</style>