// console.log(list)
// let d = document.querySelector(".titles");

// d.innerHTML = list[0]["text"]

document.querySelector("button").addEventListener("click", (e) => {

    document.querySelector(".topics").classList.toggle("hidden");
    document.querySelector(".active-b").classList.toggle("passive-b");
})


let content = document.querySelector(".topic-content")
let links = document.querySelectorAll(".color-change")
links.forEach(
    (link) => {

        link.addEventListener("click", event => {

            link.style.color = "#b44f34"
            content.innerHTML = list[link.dataset.id]["text"]
            let st = window.getComputedStyle(content, null);
            let bottom = -parseInt(st['height']) / 6;

            let startBottom = bottom;
            let w = 0;
            let op = 0;
            content.style.position = 'relative';

            let timerId = setInterval(() => {
                content.style.opacity = `${op}`;
                content.style.bottom = `${bottom}px`;
                bottom += Math.abs(startBottom) / 100;
                w += 1;
                op += 1 / 100;
                if (w > 100) {
                    content.style.position = 'static';
                    clearInterval(timerId);

                }
            }, 3);


        });
    }
)


