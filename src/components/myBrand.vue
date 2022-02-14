<template>
  <div class="brand-margin">
    <div class="brand-margin__tag">
      <h3 class="brand-margin__tag-title">Тег (бренд):</h3>
      <input class="brand-margin__input" type="text" />
      <button class="brand-margin__tag-btn">Применить</button>
      <ui-selector :list="brands"></ui-selector>
    </div>
    <div class="brand-margin__cont-wrp">
      <div class="brand-margin__cont">
        <div class="brand-margin__all-export-wrp">
          <div class="brand-margin__total-export">
            <btn-delete class="brand-margin__cont-btn-del"></btn-delete>
            <p class="brand-margin__total-brend-text">Бренд</p>
            <button @click="showDial" class="brand-margin__total-brend-btn">
              Выбор экспорта
            </button>
          </div>
          <div class="brand-margin__list-margin">
            <!--            <margin-item></margin-item>-->
          </div>
        </div>
        <div class="brand-margin__item-export-breng">
          <div class="margim-item">
            <div class="margim-item__list">
              <div class="margim-item__list-source-wrp">
                <btn-delete></btn-delete>
                <div class="margim-item__list-source">
                  <p class="margim-item__list-source-text">dfscvdfv</p>
                </div>
              </div>
              <!--              <margin-item :value="{}" :is-disable="true"></margin-item>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <dialog-export v-model:showDialog="dialogVisible">
      <btn-close-dialog
        class="bnt-style-close"
        v-model:showDialog="dialogVisible"
      ></btn-close-dialog>
      <drop-down-list></drop-down-list>
    </dialog-export>
  </div>
</template>

<script>
import dialogExport from "@component/UI/dialogExport";
import dropDownList from './dropDownList.vue'
import marginItem from './marginItem.vue'
import btnCloseDialog from "@component/UI/btnCloseDialog";
import btnDelete from "@component/UI/btnDelete";
import UiSelector from "@component/UI/UiSelector";


export default {
  name: 'myBrand',
  components: {
    UiSelector,
    dropDownList,
    marginItem,
    dialogExport,
    btnCloseDialog,
    btnDelete
  },
  data() {
    return {
      brands: [
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "\u0412\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435"},
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "Olx"},
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "prom.ua"},
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "facebook"},
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "фейсбук"},
        {id: Math.round(Math.random() * (1 - 200) + 1), title: "aliexpress"}
      ],
      dialogVisible: false
    }
  },
  methods: {
    showDial() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss">
.brand-margin {
  min-height: 660px;

  &__tag {
    max-width: 1316px;
    width: 100%;
    height: 61px;
    margin-bottom: 10px;
    padding-left: 16px;
    border: 1px solid $mainColor;
    border-radius: $borderRadius;
    @include flexCent;
  }

  &__tag-title {
    @include blockUppercase;
    margin-right: 10px;
  }

  &__input {
    max-width: 221px;
    width: 100%;
    margin-right: 10px;
    border-bottom: 1px solid $mainColor;
  }

  &__tag-btn {
    @include btnBrandAdd;
    margin-right: 55px;
  }

  &__tag-btn-brand {
    width: 292px;
    height: 35px;
    @include flexCentrJust;
    font-size: 17px;
    text-transform: uppercase;
    background-color: $backgroundColorHov;
    border-radius: $borderRadius;
  }

  &__tag-dropdown {
    width: 100%;
    height: 40px;
    padding: 0 16px;
    @include flexCent;
    justify-content: space-between;
    background-color: $colorWhite;
    border: 1px solid $mainColor;
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
  }

  &__tag-dropdown-wrp {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  &__tag-btn-brand-wrp {
    position: relative;
  }

  &__tag-dropdown-input {
    width: 172px;
    border-bottom: 1px solid $backgroundColorNav;
  }

  &__tag-dropdown-btn {
    width: 24px;
    height: 24px;
    border: 1px solid $colorRed;
    border-radius: $borderRadius;
    position: relative;
  }

  &__tag-dropdown-btn-line-r {
    position: absolute;
    width: 15px;
    height: 2px;
    background-color: $colorRed;
    transform: rotate(45deg);
    top: 10px;
    left: 3px;
  }

  &__tag-dropdown-btn-line-l {
    position: absolute;
    width: 15px;
    height: 2px;
    background-color: $colorRed;
    transform: rotate(-45deg);
    top: 10px;
    left: 3px;
  }

  &__tag-dropdown-item-wrp {
    border: 1px solid $backgroundColorNav;
    border-top: 0;
    max-height: 347px;
    position: relative;
    overflow: auto;
    border-bottom-left-radius: $borderRadius;
    border-bottom-right-radius: $borderRadius;
    background-color: $colorWhite;
    z-index: 100;
  }

  &__tag-btn-brand-icon {
    padding-left: 10px;
  }

  &__tag-dropdown-item-text {
    height: 48px;
    padding-left: 20px;
    @include flexCent;
    font-size: 17px;
    text-transform: uppercase;

    &:hover {
      background-color: $backgroundColorHov;
    }
  }

  &__cont-wrp {
    max-width: 1316px;
    width: 100%;
    border: 1px solid $backgroundColorNav;
    border-radius: $borderRadius;
  }

  &__cont {
    // border-bottom: 1px solid $backgroundColorNav;
  }

  &__cont-btn-del {
  }

  &__total-export {
    width: 41.7%;
    padding-top: 10px;
    padding-left: 10px;
    @include flexCent;
  }

  &__total-brend-text {
    margin-right: 16px;
    @include blockUppercase;
  }

  &__total-brend-btn {
    @include btnBrandAdd;
  }

  &__list-margin {
    display: flex;
  }

  &__all-export-wrp {
    @include flexCent;
    align-items: baseline;
  }

  &__item-export-breng {
    padding-left: 34px;
  }

  &__line-block {
    width: 100%;
    height: 1px;
    background-color: $backgroundColorNav;
  }
}

.bnt-style-close {
  position: absolute;
  right: 16px;
  top: 9px;
}

.isActivDropdown {
  display: block;
}
</style>
