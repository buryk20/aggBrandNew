<template>
  <div class="margin-item" :class="{ isDisable: isDisable }">
    <div class="margin-item__source-wrp">
      <Checkbox v-model="isActive" :arrBrs="'marginItem-' + exportRow.exportId">
      </Checkbox>
      <btn-delete @click="exportData.removeExportMarginById(this.exportRow.exportId)"></btn-delete>
      <div class="margin-item__source">
        <p class="margin-item__source-text">{{ exportRow.title }}</p>
      </div>
    </div>
    <div class="markup-all-price"
         v-for="(item,index) in exportRow.margin"
         :key="index">
      <margin-item :value="item" :parent="exportRow">
      </margin-item>
    </div>
    <btn-plus v-if="exportRow.isCanAdd" @click="exportRow.addMargin()"></btn-plus>
  </div>
</template>

<script>
import marginItem from "./marginItem.vue";
import Checkbox from "@component/UI/checkbox";
import btnDelete from "@component/UI/btnDelete";
import {ExportItem} from "@/store/models/export";
import {mapGetters} from "vuex";
import BtnPlus from "@/components/UI/btn-plus";

export default {
  components: {
    BtnPlus,
    btnDelete,
    marginItem,
    Checkbox
  },
  props: {
    exportRow: ExportItem
  },
  computed: {
    ...mapGetters({
      exportData: 'getExportTab',
      exportAll: 'getExportAll',
    }),
    isDisable() {
      return !this.isActive || this.exportAll.active
    },
    isActive: {
      get() {
        return this.exportRow.active;
      },
      set(val) {
        return this.exportRow.setActive(val);
      }
    }
  },
  methods: {},
};
</script>

<style lang="scss">

.markup-all-price {
  @include flexCent;
  position: relative;
  gap: 4px;
  opacity: 1;
  background-color: white;

  @include hasParent('.isDisable') {
    cursor: not-allowed;
    * {
      pointer-events: none;
    }
  }
}

.margin-item {
  padding-top: 5px;
  @include flexCent;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;

  &.isDisable {
    opacity: 0.5;
  }

  &__source {
    max-width: 272px;
    min-width: 272px;
    width: 100%;
    height: 34px;
    @include flexCent;
    gap: 4px;
    border: 1px solid $colorGrey;
    border-radius: $borderRadius;
  }

  &__source-wrp {
    @include flexCent;
    gap: 4px;
  }

  &__source-text {
    padding: 0 5px;
  }
}

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
  margin-right: 5px;
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
