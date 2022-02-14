<template>
  <div class="markup-category">
    <button @click="showDial" class="markup-category__btn">
      Выбор категории
    </button>
    <div class="markup-category-cont">
      <div class="markup-category-cont__wrp-block">
        <div class="markup-category-cont__url-block">
          <btn-delete> </btn-delete>
          <div class="markup-category-cont__url"><p>sdcs</p></div>
          <button @click="showDialExport" class="brand-margin__total-brend-btn">
            Выбор экспорта
          </button>
        </div>
        <div class="markup-category-cont__wrp-option">
<!--          <margin-item></margin-item>-->
        </div>
      </div>
    </div>
    <dialog-export
      v-model:showDialogExport="isActivDialogExport"
      @showDialogExport="showDialogEx"
    >
      <btn-close-dialog
        class="bnt-style-close"
        v-model:showDialog="isActivDialogExport"
      ></btn-close-dialog>
      <drop-down-list></drop-down-list>
    </dialog-export>
    <dialog-export v-model:showDialog="dialogVisible">
      <div class="markup-category__dialog-categories-wrp">
        <div class="markup-category__dialog-categories-head">
          <h2 class="markup-category__dialog-categories-head-text">
            Выбор категории
          </h2>
          <!-- <div class="markup-category__dialog-categories-btn-subcate">
            <p>Отобразить вложенность</p>
            <button class="markup-category__dialog-categories-btn-wrp">
              <div class="markup-category__dialog-categories-btn">
                <span
                  class="markup-category__dialog-categories-btn-line-r"
                ></span>
                <span
                  class="markup-category__dialog-categories-btn-line-l"
                ></span>
              </div>
            </button>
          </div> -->
          <btn-close-dialog
            v-model:showDialog="dialogVisible"
          ></btn-close-dialog>
        </div>
        <div class="markup-category__list-wrp">
          <ul class="markup-category__list-parent">
            <li class="markup-category__list-children">
              <div class="markup-category__wrp-li-btn">
                <button class="markup-category__list-btn" @click="click">
                  <span
                    :class="{ activBtn: active }"
                    class="drop-dawn-list__list-btn-line-virtical"
                  ></span>
                  <span class="drop-dawn-list__list-btn-line-horizon"></span>
                </button>
                <p class="markup-category__list-btn-text">
                  Литиевые аккумуляторы
                </p>
              </div>
              <ul class="markup-category__list-parent">
                <li class="markup-category__list-children">
                  <div class="markup-category__wrp-li-btn">
                    <button class="markup-category__list-btn" @click="click">
                      <span
                        :class="{ activBtn: active }"
                        class="drop-dawn-list__list-btn-line-virtical"
                      ></span>
                      <span
                        class="drop-dawn-list__list-btn-line-horizon"
                      ></span>
                    </button>
                    <p class="markup-category__list-btn-text">BMS платы</p>
                  </div>

                  <ul class="markup-category__list-parent">
                    <li class="markup-category__list-children">
                      <div class="markup-category__wrp-li-btn">
                        <button
                          class="markup-category__list-btn"
                          @click="click"
                        >
                          <span
                            :class="{ activBtn: active }"
                            class="drop-dawn-list__list-btn-line-virtical"
                          ></span>
                          <span
                            class="drop-dawn-list__list-btn-line-horizon"
                          ></span>
                        </button>
                        <p class="markup-category__list-btn-text">
                          BMS платы Lifepo4
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="markup-category__list-children">
                  <div class="markup-category__wrp-li-btn">
                    <button class="markup-category__list-btn" @click="click">
                      <span
                        :class="{ activBtn: active }"
                        class="drop-dawn-list__list-btn-line-virtical"
                      ></span>
                      <span
                        class="drop-dawn-list__list-btn-line-horizon"
                      ></span>
                    </button>
                    <p class="markup-category__list-btn-text">BMS платы LTO</p>
                  </div>
                </li>
              </ul>
            </li>
            <li class="markup-category__list-children">
              <div class="markup-category__wrp-li-btn">
                <button class="markup-category__list-btn" @click="click">
                  <span
                    :class="{ activBtn: active }"
                    class="drop-dawn-list__list-btn-line-virtical"
                  ></span>
                  <span class="drop-dawn-list__list-btn-line-horizon"></span>
                </button>
                <p class="markup-category__list-btn-text">
                  Литиевые аккумуляторы
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </dialog-export>
  </div>
</template>

<script>
import dropDownList from './dropDownList.vue'
import marginItem from "./marginItem.vue";
import DialogExport from "@/components/UI/dialogExport";
import BtnCloseDialog from "@/components/UI/btnCloseDialog";

export default {
  name: "markupPerCategory",
  components: {
    BtnCloseDialog,
    DialogExport,
    marginItem,
    dropDownList
  },
  data() {
    return {
      isActive: false,
      dialogVisible: false,
      isActivDialogExport: false
    };
  },
  methods: {
    show() {
      this.isActive = !this.isActive;
    },
    showDial() {
      this.dialogVisible = true;
    },
    showDialExport() {
      console.log('dfv');
      this.isActivDialogExport = true;
    },
    showDialogEx(showDialogExport){
      console.log(showDialogExport);
      this.isActivDialogExport = showDialogExport;
    }
  },
};
</script>

<style lang="scss">
.markup-category {
  height: 660px;
  @include contentGrid;
  @include marginCentre;
  &__btn {
    width: 389px;
    height: 48px;
    margin-bottom: 24px;
    @include flexCentrJust;
    background-color: $mainColor;
    color: $colorWhite;
    text-transform: uppercase;
    border-radius: $borderRadius;
  }
  &__dialog-categories-wrp {
    width: 735px;
    font-size: 17px;
    text-transform: uppercase;
  }
  &__dialog-categories-btn-wrp {
    width: 46px;
    height: 24px;
    margin-left: 10px;
    background-color: #dddddd;
    border-radius: 12px;
    position: relative;
  }
  &__dialog-categories-btn {
    background-color: $colorWhite;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
  }
  &__dialog-categories-btn-line-r,
  &__dialog-categories-btn-line-l {
    height: 2px;
    width: 15px;
    background-color: #dddddd;
    position: absolute;
    top: 10px;
    left: 3px;
  }
  &__dialog-categories-btn-line-r {
    transform: rotate(45deg);
  }
  &__dialog-categories-btn-line-l {
    transform: rotate(-45deg);
  }
  &__dialog-categories-head {
    padding: 0 16px;
    @include flexCentrJust;
    justify-content: space-between;
    border: 1px solid $mainColor;
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
    background-color: $colorWhite;
    z-index: 1000;
    position: relative;
  }
  &__dialog-categories-btn-subcate {
    @include flexCent;
    text-transform: initial;
  }
  &__dialog-categories-head-text {
    color: $mainColor;
    font-weight: 400;
  }
  &__list-parent {
    padding-left: 11px;
    position: relative;
  }
  &__list-wrp {
    padding-left: 4px;
    border: 1px solid $mainColor;
    border-top: 0;
    border-bottom-left-radius: $borderRadius;
    border-bottom-right-radius: $borderRadius;
    z-index: 5;
  }
  &__list-children {
    padding-left: 27px;
    position: relative;
    border-left: 1px solid $backgroundColorNav;
    display: flex;
    flex-direction: column;
    &::before {
      content: "";
      width: 29px;
      height: 1px;
      position: absolute;
      top: 32px;
      left: -1px;
      background-color: $backgroundColorNav;
    }
    &:last-child::after {
      content: "";
      width: 2px;
      position: absolute;
      top: 33px;
      bottom: 0;
      left: -1px;
      background-color: $colorWhite;
    }
  }
  &__list-btn {
    margin-right: 8px;
    @include btnPlus;
    position: absolute;
    background-color: #ffffff;
    border: 1px solid $mainColor;
  }
  &__list-btn-text {
    padding-left: 36px;
  }
  &__wrp-li-btn {
    height: 64px;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      width: 1px;
      height: 32px;
      position: absolute;
      top: -20px;
      left: -1px;
      background-color: $backgroundColorNav;
    }
  }
}

.markup-category-cont {
  @include contentGrid;
  @include magCent;
  border: 1px solid $backgroundColorNav;
  border-radius: $borderRadius;
  &__wrp-block {
    padding: 9px 11px;
    width: 100%;
    display: flex;
    align-items: baseline;
  }
  &__url {
    max-width: 272px;
    width: 100%;
    height: 36px;
    padding: 0 9px;
    border-radius: $borderRadius;
    border: 1px solid $colorGrey;
    @include flexCent;
  }
  &__wrp-option {
    position: relative;
    display: flex;
  }
  &__url-block {
    max-width: 480px;
    width: 100%;
    margin-right: 38px;
    @include flexCent;
    justify-content: space-between;
  }
}

.lineVertical {
  border-left: 1px solid $backgroundColorNav;
  padding-left: 9px;
}
</style>
