import {Class, User} from "./";

export class Question {
	public options: string[]

	constructor(
		public ask: string,
		public answer: number,
		...options: string[]
	) {
		this.options = options;
	}
}

export class Quiz {
	public questions: Question[];

	public get owner(): User {
		return this.clazz.owner;
	}

	constructor(
		public id: string,
		public title: string,
		public time: number,
		public points: number,
		public clazz: Class,
		...questions: Question[]
	) {
		this.questions = questions;
	}
}
