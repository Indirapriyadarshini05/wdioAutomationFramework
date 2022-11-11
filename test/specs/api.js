

describe('Calling methods in Api', () => {

    it("get", async () => {

        fetch('https://reqres.in/api/users/2', {
            method: "GET"
        }).then(response => {
                console.log(response.statusText);
                console.log(response.status);
                return response.json()
            })
            .then(data => console.log(data));
            
    })

    it("put", async () => {
        let PutRequest = () => {

            fetch("https://reqres.in/api/users/2", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify({
                    email: "hello@geeky.com",
                    first_name: "Geeky"
                })
            }).then(function (response) {
                console.log(response.statusText);
                console.log(response.status);
                return response.json();
            }).then(function (data) {
                console.log(data);
            
            });
        };
        PutRequest();
    });

    it("POST", async () => {
        let PostRequest = () => {

            fetch("https://reqres.in/api/users/2", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    email: "hello@geeky1.com",
                    first_name: "Geeky123"
                })
            }).then(function (response) {
                console.log(response.statusText);
                console.log(response.status);    
                return response.json();
            }).then(function (data) {
                 console.log(data);

            });
        };
        PostRequest();
    });

    it("Delete", async () => {

        fetch('https://reqres.in/api/users/2', {
            method: "DELETE"
        })          
            .then(response => {
                console.log(response.statusText);
                console.log(response.status);
                return response.json()
            })
            .then(data => console.log(data));
    })
    it.only("POST", async () => {
        let PostRequest = () => {

            fetch("https://reqres.in/api/users/2", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    email: "hello@geeky2.com",
                    first_name: "Geeky1234"
                })
            }).then(function (response) {
                  console.log(response.headers)
                return response.json();
            }).then(function (data) {
                 console.log(data);
                 
                // console.log(this.data.id); 

            });
        };
        PostRequest();
    });
});

