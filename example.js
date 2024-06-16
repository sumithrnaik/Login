document.addEventListener("DOMContentLoaded", function() {
    const text = "Maruti Suzuki Fronx";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the delay for typing speed
        }
        ducumnet.getElementById("cursor").style.display='none';
    }

    typeText();
});
