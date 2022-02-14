export class TreeItemData {
	active: boolean;
	title: string;

	constructor(data) {
		this.active = !!data.active;
		this.title = data.title;
	}

	setActive(val) {
		this.active = val;
	}
}

