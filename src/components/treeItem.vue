<template>
  <li class="drop-dawn-list__wrp-li">
    <div class="drop-dawn-list__wrp-li-btn-wrp">
      <button class="drop-dawn-list__list-btn" @click="expandList">
        <span
          :class="{ activBtn: isActive }"
          class="drop-dawn-list__list-btn-line-virtical"
        ></span>
        <span class="drop-dawn-list__list-btn-line-horizon"></span>
      </button>
      <p>
        {{ value.title }}
      </p>
    </div>
    <ul class="drop-dawn-list__none" :class="{ activList: isActive }">
      <li
        class="drop-dawn-list__nested-item"
        v-for="(item, index) of value.children"
        :key="index"
        :class="{ activItem: isActive, activeBackColor: item.active }"
      >
        <span class="drop-dawn-list__pseudo-element"></span>
        {{ item.title }}
        <div class="btn-add-wrp">
          <button
            class="drop-dawn-list__nested-item-btn"
            @click="exportData.addExportMargin(item)"
            v-if="!item.active"
          >
            Добавить
          </button>
          <button
            class="drop-dawn-list__nested-item-btn btnDelete"
            @click="exportData.removeExportMarginById(item.exportId)"
            v-else
          >
            Удалить
          </button>
        </div>
      </li>
      <li class="drop-dawn-list__nested-item" v-if="!value.children.length">
        <span class="drop-dawn-list__pseudo-element"></span>
        Нет экспортов
      </li>
    </ul>
  </li>
</template>

<script>
import {ExportTreeItem} from "@/store/models/export.ts";
import {mapGetters} from "vuex";

export default {
  name: "treeItem",
  props: {
    value: {
      required: true,
      type: ExportTreeItem,
      default: {},
    },
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    ...mapGetters({
      exportData: 'getExportTab'
    })
  },
  methods: {
    expandList() {
      this.isActive = !this.isActive;
    },
  },

};
</script>

<style lang="scss">
.btn-add-wrp {
  margin-left: auto;
  padding: 0 8px;
}

.drop-dawn-list {
  &__nested-item-btn {
    padding: 11px;
    right: 21px;
    color: $colorWhite;
    display: none;
    background-color: $colorBtn;
    text-transform: uppercase;
    border-radius: $borderRadius;
    z-index: 20;
    @include btnDelete(".btnDelete") {
      background-color: #aa3c3c;
    }
  }
}

.btnDelete {
  background-color: #aa3c3c;
  display: block;
}
</style>
