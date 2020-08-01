import {User} from './';

export class Class {

	public get image(): string {
		const rand = this.id;
		const size = '256'; //'64';
		const gray = false;
		const blur = true;
		return `https://picsum.photos/${size}.webp?${gray && 'grayscale'}&${blur && 'blur'}&random=${rand}`;
	}

	constructor(
		public id: string,
		public title: string,
		public desc: string,
		public studentCount: number,
		public owner: User,
	) {
	}
}
