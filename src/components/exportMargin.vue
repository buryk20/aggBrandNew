<template>
  <div class="export-margin" v-bind="$attrs">
    <div class="export-margin__unloading">
      <h2 class="export-margin__title">Выгрузки</h2>
      <drop-down-list :tab="tab"></drop-down-list>
      <div class="checkbox-wrp">
        <input type="checkbox" class="custom-checkbox" id="checkbox" v-model="exportAll.active"/>
        <label class="custom-checkbox__text" for="checkbox">
          <p class="custom-checkbox__text-style">Выбрать все экспорты</p>
        </label>
      </div>
      <div class="export-margin__btn-pus-wrp" :class="{isDisable: !exportAll.active}">
        <margin-item v-for="(item,index) in exportAll.margin"
                     :key="index"
                     :value="item"
                     :parent="exportAll"
        ></margin-item>
        <btn-plus @click="exportAll.addMargin()"></btn-plus>
      </div>
    </div>
    <div class="export-margin__margin">
      <h2 class="export-margin__title">Наценка</h2>
      <div class="export-margin__container">
        <export-margin-item v-for="item of list"
                            :key="item.exportId"
                            :exportRow="item">
        </export-margin-item>
      </div>
    </div>
  </div>
  <btn-save @save="saveOnServer" @okay="okay"></btn-save>
</template>

<script>

import dropDownList from './dropDownList.vue'
import marginItem from './marginItem.vue'
import exportMarginItem from './exportMarginItem.vue'
import {mapGetters, mapActions} from "vuex";
import BtnSave from "@/components/UI/btnSave";
import BtnPlus from "@/components/UI/btn-plus";

export default {
  name: "exportMargin",
  components: {
    BtnPlus,
    BtnSave,
    dropDownList,
    marginItem,
    exportMarginItem
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      tab: 'getExportTab',
      list: 'getExportMarginList',
      exportAll: 'getExportAll'
    }),
  },
  methods: {
    ...mapActions({
      saveOnServer: 'saveExportData',
    }),
    okay() {
      if (confirm('Вы уверены, что хотите вернуться назад?'))
        window.history.back();
    },
  }
}
</script>

<style lang="scss" scoped>
.export-margin {
  min-height: 660px;
  color: $mainColor;
  @include flexSpasBit;
  @include contentGrid;
  @include magCent;
  gap: 8px;

  &__unloading {
    max-width: 450px;
    width: 100%;
  }

  &__title {
    margin-bottom: $magButt;
    font-size: 17px;
    text-align: left;
  }

  &__btn-pus-wrp {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
  }

  &__container {
    max-width: 857px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    border: $borderBlock;
    border-radius: $borderRadius;
  }

  &__margin {
    width: 100%;
  }
}
</style>
