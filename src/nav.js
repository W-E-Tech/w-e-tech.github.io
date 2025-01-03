window.onload = function () {
    fetch('./nav.template.html')
        .then(function (response) {
            return response.text();
        }).then(function (htmlText) {
            document.querySelector('nav').appendChild(new DOMParser().parseFromString(htmlText, 'text/html').querySelector('template').content.cloneNode(true))
        });
}