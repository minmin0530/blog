window.onload = () => {

    document.getElementById("regist_button").addEventListener("click", (e) => {
        const name = document.getElementById("user_name").value;
        const mail = document.getElementById("mail").value;
        const password = document.getElementById("password").value;

        const body = {
            name: name,
            mail: mail,
            password: password
        }

        const param = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        };

        fetch("/regist_account", param).then( (response) => response.json() ).then(
            (data) => {
                console.log(data);
            }
        );
    }, false);

}