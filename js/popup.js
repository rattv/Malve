var button = document.getElementById("btn");
button.addEventListener('click', function() {
    swal({
        title: "Да это же скидка на целых 45%!",
        text: "Успейте купить наш майонез, пока он совсем не просрочился!",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
    });
});