var pageHeading = document.getElementById('pageHeading');

pageHeading.addEventListener('click', function () {
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number 1</p>';
    document.getElementsByClassName('container')[0].appendChild(myElement);
});


pageHeading.addEventListener('click', function () {
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number 2</p>';
    document.getElementsByClassName('container')[0].appendChild(myElement);
});
