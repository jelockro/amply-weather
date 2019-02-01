
export let getWeather = () => new Promise((resolve) => {
        fetch('https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather', 
        {
            method: 'GET',
            mode: 'cors',
        })
        .then( response => {
            return response.json();
        }).then(obj => {
            // console.log(obj);
            // console.log(obj.today.state);
            // console.log(obj.today.city);
            // console.log(obj.today.temperature)
            // console.log(obj.iconLink)
            let returnList = [obj.today.city, 
                obj.today.state, 
                obj.today.temperature, 
                obj.today.description,
                obj.today.iconLink,
                obj.today.highTemperature,
                obj.today.lowTemperature
                ];
            console.log(obj);
            resolve(obj)
        }).catch(e => console.log("it didn't work: " + e));
    });
