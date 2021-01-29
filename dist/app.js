let sU = document.getElementById("searchUser");

//Init Github
const github = new Github();

//Init UI
const ui = new UI();

//Search Input eventListener
sU.addEventListener("keyup", (e) => {
	//Get input text
	let userTxt = e.target.value;
	if (userTxt !== "") {
		//Make http call
		github.getUser(userTxt).then((data) => {
			if (data.prof.message === "Not Found") {
				//Show Alert
				ui.showAlert("User not found", "alert alert-danger");
			} else {
				//Show Profile
				ui.showProf(data.prof);
				ui.showRepos(data.repos);
				ui.clearAlert();
			}
		});
	} else {
		//Clear Profile
		ui.clearProf();
	}
});
