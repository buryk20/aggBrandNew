import {TreeItemData} from "@/store/models/treeItemData";
import {uid} from "@/store/models/tools";
import {errorService} from "@/store/models/errorService";

export class BrandData {
	suppID: number;
	exportList: ExportTreeItem[];
	exportTab: ExportTab;

	valid() {
		this.exportList.forEach(el => el.valid(this.exportTab.exports));
		this.exportTab.valid();
	}

	constructor(data) {
		if (!data) return;
		this.suppID = data.supplierID;
		this.exportList = data.exportList.map(el => new ExportTreeItem(el));
		this.exportTab = new ExportTab(data.exportTab, this);

		if (data.errorText) {
			errorService.addError(data.errorText);
		}

		this.valid();
	}
}

export class BrandList {
	
}

export class ExportTab {
	brandData: BrandData;
	postUrl: string;
	exports: ExportItem[];
	exportAll: ExportAll;

	valid() {
		this.exports.forEach(el => el.valid(this.exports));
	}

	constructor(data: any, brandData: BrandData) {
		this.brandData = brandData;

		this.postUrl = data.postUrl;
		this.exports = data.exports.map(el => ExportItem.initFromJson(el, this.brandData.exportList));
		this.exportAll = new ExportAll(data.exportAll);

		this.valid();
	}

	addExportMargin(val: ExportTreeItem) {
		val.setActive(true);
		this.exports.push(ExportItem.initFromTreeItem(val));
	}

	removeExportMarginById(id: number) {
		ExportTreeItem.findById(id, this.brandData.exportList)?.setActive(false);
		const index = this.exports.findIndex(el => el.exportId === id);
		if (index < 0) return errorService.addError(`Данного экспорта нет в списке наценок! [exportId: ${id}]`)

		this.exports.splice(index, 1);
	}
}

//Элемент дерева экспорта
export class ExportTreeItem extends TreeItemData {
	parent: ExportTreeItem | null = null;
	exportId: number;
	children: ExportTreeItem[] = [];

	constructor(data: any, parent?: ExportTreeItem) {
		super(data);

		this.parent = parent ? parent : null;
		this.exportId = +data?.exportId;

		if (data.children) {
			this.children = data.children.map(el => new ExportTreeItem(el, this));
		}
	}

	static findById(id, tree: ExportTreeItem[]): ExportTreeItem | undefined {
		let treeItem = tree.find(el => el.exportId === id);
		if (treeItem) return treeItem;

		for (let i = 0; i < tree.length; i++) {
			treeItem = ExportTreeItem.findById(id, tree[i].children)
			if (treeItem) return treeItem;
		}

		return treeItem;
	}

	getFullTitle(): string {
		if (this.parent)
			return this.parent.getFullTitle() + ' / ' + this.title;
		else
			return this.title
	}

	valid(exports: ExportItem[]) {
		if (this.active && !exports.find(el => el.exportId === this.exportId)) {
			errorService.addError(`Экспорт [${this.title}, exportId: ${this.exportId}] активен, но не имеет наценки.`);
		}
		this.children.forEach(el => el.valid(exports));
	}
}

export class HasMargin {
	margin: MarginItem[];

	constructor(margin) {
		this.margin = margin.map(el => new MarginItem(el, this))
		if (!this.margin.length) this.addMargin();
	}

	addMargin(): void {
		this.margin.push(new MarginItem({
			value: 0,
			type: MarginType.грн
		}, this))
	}
}

export class ExportAll extends HasMargin {
	active: boolean;

	constructor(data) {
		super(data.margin);
		this.active = data.active;
	}
}

// Строки с наценкой
export class ExportItem extends HasMargin {
	exportMarginId: number;
	exportId: number;
	active: boolean;
	title: string;

	valid(list: ExportItem[]) {
		let count = 0;
		list.forEach(el => {
			if (el.exportId === this.exportId) count++;
		});
		if (count > 1) errorService.addError(`Более одного объекта [exportId: ${this.exportId}] наценки на экспорт!`);
	}

	private constructor({exportMarginId, exportId, active, margin, title}) {
		super(margin);
		this.exportMarginId = exportMarginId;
		this.exportId = exportId;
		this.active = active;
		this.title = title;
	}

	static initFromJson({exportMarginId, exportId, active, margin}, exportList: ExportTreeItem[]): ExportItem {
		return new ExportItem({
			exportId,
			exportMarginId,
			active,
			title: ExportTreeItem.findById(exportId, exportList)?.getFullTitle() || 'Ошибка: Экспорт не найден',
			margin,
		});
	}

	static initFromTreeItem(val: ExportTreeItem, exportMarginId = 0): ExportItem {
		return new ExportItem({
			exportId: val.exportId,
			title: val.getFullTitle(),
			exportMarginId,
			active: true,
			margin: [{value: 0, type: MarginType.грн}],
		});
	}

	setActive(val) {
		this.active = val;
	}

	toJSON() {
		return {
			exportMarginId: this.exportMarginId,
			exportId: this.exportId,
			active: this.active,
			margin: this.margin
		}
	}

}

//Наценка
export class MarginItem {
	parent: HasMargin;
	id: string = uid();
	value: number;
	type: any;

	constructor({value, type}, parent: HasMargin) {
		this.value = value;
		this.type = type;
		this.parent = parent;
	}

	remove() {
		const index = this.parent.margin.findIndex(el => this.id === el.id);
		this.parent.margin.splice(index, 1);
	}

	toJSON() {
		return {
			value: this.value,
			type: this.type
		}
	}
}

export enum MarginType {
	'грн' = 1,
	'%',
	'-грн',
	'-%'
}
