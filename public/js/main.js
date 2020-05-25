let input = document.getElementById('url')
document.getElementById('send').addEventListener('click', function () {

    var data = {};
    data.url = url.value;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/short', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var url = JSON.parse(xhr.responseText);
        
        if (xhr.readyState == 4 && xhr.status == "200") {

            console.log(url)
            input.value = ''
            input.value = url.newUrl.shortUrl
        } else {
            console.log(url[0])
        }
    }
    xhr.send(json);

})