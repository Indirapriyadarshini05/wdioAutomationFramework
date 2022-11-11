const axios = require('axios');

describe('My Login application', () => {
    it('Get', async () => {

        let ststusResponse = await axios.get("https://hronewebapi.hrone.cloud/api/Default/LogOnType?logOnParam=9515543646");
        //console.log(ststusResponse);
        console.log(ststusResponse.status);
        expect(ststusResponse.status).toEqual(200);
        console.log(ststusResponse.data);
        
        let jsonres= JSON.parse(JSON.stringify(ststusResponse.data));
       
        console.log(jsonres.domainCode);

    });

    it('Post', async () => {

        let ststusResponse = await axios.post("https://reqres.in/api/users/2", {
            "name": "jhon",
            "city": "USA"
        });
        console.log(ststusResponse);
        console.log(ststusResponse.status);
        expect(ststusResponse.status).toEqual(201);
       console.log(ststusResponse.data) ;
       let jsonres= JSON.parse(JSON.stringify(ststusResponse.data));
       console.log("id is"+" "+jsonres.id);
       let id = jsonres.id;
       console.log(id);
  

    });

    it('Put', async () => {

        let ststusResponse = await axios.put("https://reqres.in/api/users/2", {
            "name": "jhon",
            "city": "USA",
            "fullname": "Jhon carpus"

        });
        console.log(ststusResponse);
        console.log(ststusResponse.status);
        expect(ststusResponse.status).toEqual(200);

       

    });
    it('Delete', async () => {

        let ststusResponse = await axios.delete("https://reqres.in/api/users/2", {
            method: "DELETE"
        });
        console.log(ststusResponse);
        console.log(ststusResponse.status);
        console.log(ststusResponse.statusText);
        expect(ststusResponse.status).toEqual(204);
        let jsonres= JSON.parse(JSON.stringify(ststusResponse.data));
        console.log("id is"+" "+jsonres.id);

    });


    it('Post', async () => {
        axios.post('https://reqres.in/api/users/2')
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                
 
                let jsonres= JSON.parse(JSON.stringify(ststusResponse.data));
                console.log("id is"+" "+jsonres.id);
            });
    })

   

});


