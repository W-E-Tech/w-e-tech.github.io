const templates = [
    { path: './nav.template.html', selector: 'nav' },
    { path: './footer.template.html', selector: 'footer' },
];

window.addEventListener('load', function () {
    templates.forEach(function (template) {
        fetch(template.path)
            .then(function (response) {
                return response.text();
            }).then(function (htmlText) {
                document.querySelector(template.selector).appendChild(new DOMParser().parseFromString(htmlText, 'text/html').querySelector('template').content.cloneNode(true))
            });
    });
});