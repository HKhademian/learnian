export class Question {
	public options: string[]

	constructor(public ask: string, public answer: number, ...options: string[]) {
		this.options = options;
	}
}

export class Quiz {
	constructor(
		public id: string,
		public title: string,
		public questions: Question[] = [],
	) {
	}
}
