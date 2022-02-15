import {createStore} from 'vuex'
import exportMargin from "@/store/modules/exportMargin.ts";
import {BrandData, ExportTab, ExportTreeItem, MarginItem} from "@/store/models/export";

export default createStore({
	state: {
		brandData: new BrandData(null)
	},
	getters: {
		suppID(state) {
			return state.brandData.suppID;
		},
		getMutableMarginItem: () => (item): MarginItem => item,

		getExportTab: (state): ExportTab => {
			return state.brandData.exportTab;
		},
	},
	mutations: {
		initBrandData(state, data) {
			state.brandData = new BrandData(data);
		},
	},
	actions: {

	},
	modules: {
		exportMargin,
	}
})

