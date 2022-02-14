<template>
  <div
    class="dialog"
    v-if="showDialog || showDialogCat || showDialogExport"
    @click.="hideDialog"
  >
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'dialogExport',
    props: {
        showDialog: {
            type: Boolean,
            default: false
        },
        showDialogExport: {
          type: Boolean,
          default: false
        }
    },
    methods: {
        hideDialog(){
            this.$emit('update:showDialog', false);
            this.$emit('update:showDialogExport', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 101;
  &__content {
    width: auto;
    margin: auto;
    position: relative;
    background-color: $colorWhite;
    border-radius: $borderRadius;
  }
}
</style>