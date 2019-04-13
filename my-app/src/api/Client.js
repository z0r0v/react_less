function client() {
    this.login = (login, password) => {
        return new Promise(function (resolve, reject) {
            let profile = localStorage.getItem("profile_" + login);
            profile = JSON.parse(profile);
            if (profile != null && login === profile.email && password === profile.password) {
                resolve("Here sometime there will be a JVS token maybe .....")
            }
            else (
                reject("Try again")
            )
        });
    }

    this.register = (model) => {
        return new Promise(
            function (resolve, reject) {
                let profile = localStorage.getItem("profile_" + model.email);
                if (profile) {reject("This user is already registered."
                )}
                localStorage.setItem
                ("profile_" + model.email, JSON.stringify({
                    email: model.email, password: model.password
                    }))
                resolve();
            }
        )
    }
}
export default client;