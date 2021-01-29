class Github {
	constructor() {
		this.client_id = "9231a2b727b324efd21e";
		this.client_secret = "2cb0f7eae89412362d90093e261b29c68324bc39";
		this.repos_count = 50;
		this.repos_sort = "created: asc";
	}
	async getUser(user) {
		const profRes = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
		);
		const repoRes = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
		);
		const prof = await profRes.json();
		const repos = await repoRes.json();

		return {
			prof,
			repos,
		};
	}
}
