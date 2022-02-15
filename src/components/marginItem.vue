<template>
  <btn-delete v-if="parent.margin.length > 1" @click="remove()"></btn-delete>
  <div class="margin">
    <input class="margin__price" type="number"
           name="margin"
           min="0"
           placeholder=""
           v-model="mutable(value).value"
           :step="step"
    />
    <select class="margin__list-wrp" v-model="mutable(value).type">
      <option v-for="(val,index) in typeList"
              :key="index"
              :value="val">
        {{ getTypeName(val) }}
      </option>
      <span class="margin__currency"> {{ value.type }} </span>
    </select>
  </div>
</template>

<script>
import BtnDelete from "@/components/UI/btnDelete";
import {mapGetters} from "vuex";
import {HasMargin, MarginItem, MarginType} from "@/store/models/export";
import BtnPlus from "@/components/UI/btn-plus";

export default {
  name: "my-btn-plus",
  components: {BtnPlus, BtnDelete},
  props: {
    value: {
      type: MarginItem,
      require: true
    },
    parent: {
      type: HasMargin,
      require: true
    },
  },
  data() {
    return {
      typeList: [],
    };
  },
  watch: {},
  computed: {
    ...mapGetters({
      mutable: 'getMutableMarginItem'
    }),
    step() {
      if (this.value.type === MarginType.грн || this.value.type === MarginType["-грн"])
        return 1;
      else
        return 0.1
    }
  },
  methods: {
    getTypeName(val) {
      return MarginType[val];
    },
    remove() {
      this.value.remove();
    }
  },
  mounted() {
    this.typeList = Object.keys(MarginType).filter(x => !isNaN(x)).map(x => +x);
  }
};
</script>

<style lang="scss" scoped>

.ubtn-plus {
  padding: 16px;
  background-color: aqua;

  // @include hasParent(".dis") {
  //   background-color: gray;
  // }
}

.margin {
  display: flex;
  gap: 4px;

  @include hasParent('.isDisable') {
    opacity: 0.6;
    pointer-events: none;
  }

  &__price {
    width: 61px;
    height: 34px;
    padding-left: 11px;
    border: $borderBlock;
    @include flexCentrJust;
    border-radius: $borderRadius;
  }

  &__list-wrp {
    height: 34px;
    border: $borderBlock;
    border-radius: $borderRadius;
    color: $colorBlack;
    text-transform: uppercase;
  }

  &__currency {
    color: $colorBlack;
    text-transform: uppercase;
  }
}

option {
  border-radius: 8px;
}

</style>
