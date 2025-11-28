let para = document.querySelector("p")

let text = para.innerText;
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

para.addEventListener("mouseenter", () => {
    let i = 0;

    function matrixEffect() {

        let ans = text.split("").map((char, index) => {
            if (index < i) return char;
            return str[Math.floor(Math.random() * 52)];
        }).join("")

        para.innerText = ans;
        i += 0.25;
    }


    setInterval(() => { matrixEffect() }, 30);
})