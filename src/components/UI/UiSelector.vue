<template>
  <div class="brand-margin__tag-btn-brand-wrp">
    <button @click="show" class="brand-margin__tag-btn-brand">
      Выберите бренд
      <img
          class="brand-margin__tag-btn-brand-icon"
          src="/icon/arrow_to_down_icon.svg"
          alt=""
      />
    </button>
    <div
        :class="{ isActivDropdown: isActive }"
        class="brand-margin__tag-dropdown-wrp"
    >
      <div class="brand-margin__tag-dropdown">
        <img src="/icon/search_icon_brend.svg" alt=""/>
        <input class="brand-margin__tag-dropdown-input" type="text" v-model="searchStr"/>
        <!-- <button @click="show" class="brand-margin__tag-dropdown-btn">
          <span class="brand-margin__tag-dropdown-btn-line-r"></span>
          <span class="brand-margin__tag-dropdown-btn-line-l"></span>
        </button> -->
        <btn-close-dialog @click="show"></btn-close-dialog>
      </div>
      <div class="brand-margin__tag-dropdown-item-wrp">
        <p
            v-for="(item, index) in showList"
            :key="index"
            class="brand-margin__tag-dropdown-item-text"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/tools/search";
import BtnCloseDialog from "@component/UI/btnCloseDialog";

export default {
  components: {BtnCloseDialog},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      searchStr: '',
      isActive: false,
    }
  },
  computed: {
    showList() {
      return this.list
          .filter(el => {
            const searchVal = this.searchStr.toLowerCase().trim();
            const en = Search.transRuToEn(searchVal);
            const ru = Search.transEnToRu(searchVal);

            return el.title.toLowerCase().includes(en) ||
                el.title.toLowerCase().includes(ru)
          })
          .sort();
      // (a, b) => {
      //   if (a < b) {
      //     return -1;
      //   }
      //   if (a > b) {
      //     return 1;
      //   }
      //   return 0;
      // }
    }
  },
  methods: {
    show() {
      this.isActive = !this.isActive
    },
  }
}
</script>

<style scoped>

</style>
