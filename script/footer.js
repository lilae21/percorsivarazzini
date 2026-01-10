document.addEventListener("DOMContentLoaded", function () {
   /*  fetch("https://lilae21.github.io/conlangs/parts/footer.htm") */
   fetch("footer.htm")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
        });
});
