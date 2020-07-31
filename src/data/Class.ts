import {Quiz, User} from './';

export class Class {
	public quizzes: Quiz[];

	public get image(): string {
		return "https://picsum.photos/64.webp?grayscale&blur&_=" + this.id;
	}

	constructor(
		public id: string,
		public title: string,
		public desc: string,
		public studentCount: number,
		public owner: User,
		...quizzes: Quiz[]
	) {
		this.quizzes = quizzes;
	}
}
