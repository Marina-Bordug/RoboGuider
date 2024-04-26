// console.log(list)
// let d = document.querySelector(".titles");

// d.innerHTML = list[0]["text"]
const topics = document.querySelector(".topics")
const topicContent =  document.querySelector(".topic-content")
document.querySelector(".active-b").addEventListener("click", (e) => {
    document.querySelector(".topics").classList.toggle("hidden");
    // document.querySelector(".topics").classList.toggle("nonhidden");
    document.querySelector(".active-b").classList.toggle("passive-b");
    document.querySelector(".topic-content").classList.toggle("topic-content-w");
    let startLeft;
    if (topics.classList.contains("hidden")) {
        startLeft = 0
    } else {
        startLeft = -300
    }

    let timerId = setInterval(() => {
        
        if (topics.classList.contains("hidden")) {
            startLeft-=5
        } else {
            startLeft+=5
        }
        topics.style.left = `${startLeft}px`;
        topicContent.style.paddingLeft = `${300+startLeft}px`;
        console.log(startLeft)
        if (startLeft>=0 || startLeft <= -300) {
            clearInterval(timerId);

        }
        
    }, 1);
     
    
    
})

let content = document.querySelector(".topic-content")
let links = document.querySelectorAll(".color-change")
links[0].classList.add("active-link");
content.innerHTML = list[links[0].dataset.id]["text"];
links.forEach(
    (link) => {

        link.addEventListener("click", event => {
            links.forEach(
                (linka) => {
                    linka.classList.remove("active-link"); 
                }
            )
            link.classList.add("active-link");
            // link.style.backgroundColor = "#b44f34";
            content.innerHTML = list[link.dataset.id]["text"];
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



