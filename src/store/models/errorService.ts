import {uid} from "@/store/models/tools";
import {reactive} from "vue";

export class MyError {
	id: string;

	constructor(public msg: string) {
		this.id = uid();
	}
}

export class ErrorService {
	secondsShow: number = 7;
	errors: MyError[] = []

	addError(str) {
		const newError = new MyError(str);
		this.errors.push(newError);
		this.setRemoveTimer(newError.id);
	}

	setRemoveTimer(id: string) {
		setTimeout(() => {
			const index = this.errors.findIndex(el => el.id === id);
			this.errors.splice(index, 1);
		}, this.secondsShow * 1000);
	}
}

export const errorService = reactive(new ErrorService());
