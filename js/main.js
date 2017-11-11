var form = document.getElementById('form');

form.onsubmit = function (event) {
    event.preventDefault();
    console.log(form.name.value);
    console.log(form.last.value);
    console.log(form.email.value);
    console.log(form.message.value);
};
