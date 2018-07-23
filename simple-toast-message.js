/*
    2018.07.24. v0.1

    Simple toast msg written in vanila Javscript
    github : https://github.com/devDohyun/

*/

function create_toast(msg = "Please set the message.", timer = 1500) {
    const el = document.createElement("div");
    el.classList.add("simple-toast-container");
    el.innerText = msg;

    document.documentElement.appendChild(el);

    setTimeout(() => { el.remove(); }, timer);
}