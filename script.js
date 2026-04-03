// Typing effect
const text = "Python Developer | Web Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// Copy email function
function copyEmail() {
    navigator.clipboard.writeText("abhiraut2278@gmail.com");
    alert("Email copied!");
}
