//Gator Logo disapears
var main = document.getElementById('main'),
    count = 0;
main.onclick = function () {
    main.innerHTML = '<p> This happens on click!</p>' +
    count;
};

//Mouseover changes text to image
var article = document.getElementById('article');

article.onmouseover = function () {
    article.innerHTML = '<img src="img/gn.jpg" title="gator" alt="gators" width="100"/>';
};
