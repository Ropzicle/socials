document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const text = "Hi, I'm ropz";
    let i = 0;

    function type() {
        if (i < text.length) {
            typingElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(type, 150);
        } else {
            document.querySelector(".cursor").style.display = "none"; // Hide cursor after typing
        }
    }

    typingElement.style.opacity = "1"; // Make the text visible immediately
    type();
});
