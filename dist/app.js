//Init Github
const github = new Github;

//Init UI
const ui = new UI;
//Search Input
const searchUser = document.getElementById("searchUser");

//Search input eventListener
searchUser.addEventListener("keyup", (e) => {
    //Get input text
    const userText = e.target.value;
    if (userText !== "") {
        //Make http call
        github.getUser(userText)
            .then(data => {
            if (data.profile.message === "Not Found") {
                //Show alert
                ui.showAlert("User not found", "alert alert-danger");
            } else {
				//Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                ui.clearAlert();
		    }
        })
    } else {
        //Clear Profile
        ui.clearProfile();
    }
})