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

	constructor(
		public id: string,
		public title: string,
		public time: number,
		public points: number,
		public classId: string,
		...questions: Question[]
	) {
		this.questions = questions;
	}
}
