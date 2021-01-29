class Github {
	constructor() {
		this.client_id = "9231a2b727b324efd21e";
		this.client_secret = "022cfef1a2d5a9b90fb574ca6f89dd713ae286be";
		this.repos_count = 20;
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
