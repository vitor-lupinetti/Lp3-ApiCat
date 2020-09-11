function callApi() {

    var input = document.getElementById("input").value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = 'http://http.cat/' + input;
    console.log(proxyurl + url);
    var data

    fetch(proxyurl + url) // Call the fetch function passing the url of the API as a parameter
        .then(response => {
            response.blob().then(blobResponse => {
                console.log(blobResponse)
                data = blobResponse
                const urlCreator = window.URL || window.webkitURL;
                document.getElementById('img').src = urlCreator.createObjectURL(data);
            })
        });


}