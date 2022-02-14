<template>
  <error-component></error-component>
  <div class="brand-markup">
    <my-nav-brand></my-nav-brand>
  </div>
</template>

<script>
import myNavBrand from "./components/navBrand.vue"
import {mapMutations} from "vuex";
import ErrorComponent from "@/components/ErrorComponent";
import {errorService} from "@/store/models/errorService";

export default {
  name: 'brand-markup',
  props: {
    data: String
  },
  data() {
    return {
      brandData: {}
    }
  },
  components: {
    ErrorComponent,
    myNavBrand
  },
  methods: {
    ...mapMutations(['initBrandData'])
  },
  beforeMount() {
    this.brandData = JSON.parse(this.data);
    this.initBrandData(this.brandData);
  },
}
</script>

<style lang="scss" scoped>
.brand-markup {
  font-family: $font;
  @include contentGrid;
  @include marginCentre;
  margin-bottom: 24px;
}
</style>
