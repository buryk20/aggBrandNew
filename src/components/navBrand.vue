<template>
    <div class="nav-brand-markup">
      <div class="nav-brand-markup__wrp">
        <div
            @click="page = pages.export"
            :class="{ divActive: page === pages.export }"
            class="nav-brand-markup__btn"
        >
          <p>Наценка на экспорт</p>
        </div>
        <div
            @click="page = pages.brand"
            :class="{ divActive: page === pages.brand }"
            class="nav-brand-markup__btn"
        >
          <p>Наценка на бренд</p>
        </div>
        <div
            @click=" page = pages.category"
            :class="{ divActive: page === pages.category }"
            class="nav-brand-markup__btn"
        >
          <p>Наценка на категорию</p>
        </div>
      </div>
    </div>
    <export-margin v-if="page === pages.export"/>
    <my-brand v-if="page === pages.brand"/>
    <markup-per-category v-if="page === pages.category"/>
</template>

<script>

import myBrand from './myBrand.vue'
import exportMargin from './exportMargin.vue'
import markupPerCategory from './markupPerCategory.vue'

export default {
  name: "myNavBrand",
  components: {
    myBrand,
    exportMargin,
    markupPerCategory
  },
  data() {
    return {
      pages: {
        brand: 0,
        export: 1,
        category: 2
      },
      page: 1,
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.nav-brand-markup {
  max-width: 1200px;
  width: 100%;
  padding-top: 15px;
  margin-bottom: 20px;
  padding-left: 63px;
  @include marginCentre;

  &__wrp {
    height: 35px;
    padding-left: 2px;
    padding-right: 2px;
    background-color: $backgroundColorNav;
    border-radius: $borderRadius;
    display: inline-flex;
    align-items: center;
  }

  &__btn {
    @include navBtn;
    transition: 0.3s ease-out;
    cursor: pointer;
  }

  &__btn + &__btn {
    margin-left: 15px;
  }
}

.divActive {
  @include navBtnAct;
  transition: 0.3s ease-in;
}
</style>
