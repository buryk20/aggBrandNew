import axios from "axios";
import apiRoutes from "@/apiRoutes";
import {ExportAll, ExportItem, MarginItem} from "@/store/models/export";

export default {
	state: {},
	getters: {
		getExportMarginList: (state, getters, rootState, rootGetters): ExportItem[] => {
			return rootGetters.getExportTab.exports;
		},
		getExportAll: (state, getters, rootState, rootGetters): ExportAll => {
			return rootGetters.getExportTab.exportAll;
		},
	},
	actions: {
		saveExportData({rootGetters }) {
			const tab = rootGetters.getExportTab;
			axios.post(tab.postUrl, {
				supplierID: rootGetters.suppID,
				exports: tab.exports,
				exportAll: tab.exportAll
			}).then(data => {
				console.log(data);
			});
		},
		fetchExportData(ctx) {
			return sleep(1).then(function (doneStr) {
				console.log(doneStr);
				return axios.get(apiRoutes.exportData).then((res) => {
					ctx.commit("setExportData", res.data)
				});
			});
		}
	}
};

function sleep(sec) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("sleep done!");
		}, sec * 1000)
	})
}
