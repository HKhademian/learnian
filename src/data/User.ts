export class User {
	constructor(
		public username: string,
		public title: string,
		public password: string | undefined = undefined,
	) {
	}

	login(password: string): boolean {
		return this.password ? this.password === password : this.username === password;
	}
}
