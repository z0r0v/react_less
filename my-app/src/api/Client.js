import jwt from 'jsonwebtoken'

function client() {
    this.login = (login, password) => {
        return new Promise(function (resolve, reject) {
            let profile = localStorage.getItem("profile_" + login);
            profile = JSON.parse(profile);
            if (profile != null && login === profile.email && password === profile.password) {

                // Here is server side code
                const serverResponse = jwt.sign({login:login}, 'server-secret-key');
                resolve(serverResponse);
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
    };

    this.sendContent = (content, token) => {
        return new Promise(
            function (resolve, reject) {
                try {
                    let decodedData = jwt.verify(token, 'server-secret-key');
                    let login = decodedData.login;
                    localStorage.setItem("content_" + login, content);
                    resolve(content);
                } catch (err) {
                    reject(err);
                }
            }
        )
    };

    this.getContent = (token) => {
        return new Promise(
            function (resolve, reject) {
                try {
                    let decodedData = jwt.verify(token, 'server-secret-key');
                    let login = decodedData.login;
                    let content = localStorage.getItem("content_" + login);
                    resolve(content);
                } catch (err) {
                    reject(err);
                }
            }
        )
    };
}
export default client;