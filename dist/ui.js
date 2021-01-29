class UI {
	constructor() {
		this.profile = document.getElementById("profile");
	}
	//Display Profile
	showProf(user) {
		this.profile.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn_blue">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge">
                            Public Repos: ${user.public_repos}
                        </span>
                        <span class="badge">
                            Public Gists: ${user.public_gists}
                        </span>
                        <span class="badge">
                            Followers: ${user.followers}
                        </span>
                        <span class="badge">
                            Following: ${user.following}
                        </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class = "page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
	}

	//Show user repos
	showRepos(repos) {
		let output = "";
		repos.forEach((repo) => {
			output += `
                <div class="repo_container">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge">
                                Stars: ${repo.stargazers_count}
                            </span>
                            <span class="badge">
                                Watchers: ${repo.watchers_count}
                            </span>
                            <span class="badge">
                                Forks : ${repo.forms_count}
                            </span>
                        </div>
                    </div>
                </div>
            `;
		});
		//Output repos
		document.getElementById("repos").innerHTML = output;
	}

	//Show alert message
	showAlert(message, className) {
		//Clear any remaining alerts
		this.clearAlert();
		//Create div
		const div = document.createElement("div");
		//Add classes
		div.className = className;
		//Add text
		div.appendChild(document.createTextNode(message));
		//Get Parent
		const container = document.querySelector(".searchContainer");
		//Get search box
		const search = document.querySelector(".search");
		//Insert alert
		container.insertBefore(div, search);
		// //Timeout after 3 sec
		// setTimeout(() => {
		//     this.clearAlert();
		// }, 3000);
	}
	//Clear Alert message
	clearAlert() {
		const currentAlert = document.querySelector(".alert");
		if (currentAlert) {
			currentAlert.remove();
		}
	}
	//Clear Profile
	clearProf() {
		this.profile.innerHTML = "";
	}
}
