

// function createCORSRequest(method, url) {
//     let xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//       // XHR for Chrome/Firefox/Opera/Safari.
//       xhr.open(method, url, true);
//     // } else if (typeof XDomainRequest != "undefined") {
//     //   // XDomainRequest for IE.
//     //   xhr = new XDomainRequest();
//     //   xhr.open(method, url);
//     } else {
//       // CORS not supported.
//       xhr = null;
//     }
//     return xhr;
//   }

  
//   // Make the actual CORS request.
//  export default function makeCorsRequest(props) {
//     // This is a sample server that supports CORS.
//     var url = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';
  
//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//       alert('CORS not supported');
//       return;
//     }
  
//     // Response handlers.
//     xhr.onload = function() {
//       var obj = JSON.parse(xhr.responseText);
//       alert('Response from CORS request to ' + url + ': ' + obj);
//       console.log(obj);
//       console.log("let's get today's state: " + obj.today.state);
//       console.log(obj.daily.state);
//       console.log(obj.daily.temperature);
//       return (obj.today.city, obj.today.state)
//     };
  
//     xhr.onerror = function() {
//       alert('Woops, there was an error making the request.');
//     };
  
//     xhr.send();
//   }
export default function getWeatherData() {
    fetch('https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather', 
        {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
        .then( response => {
            let obj = JSON.parse(response);
            console.log(obj.city);
            console.log(obj.state);
            console.log(obj.temperature)
            console.log(obj.iconLink)
        }).catch(e => console.log("it didn't work: " + e));
    }