
// console.log(list)
// let d = document.querySelector(".titles");

// d.innerHTML = list[0]["text"]

let content = document.querySelector(".topic-content")
console.log(list)
let links = document.querySelectorAll(".small-topic")
links.forEach(
    (link)=>{
        console.log(link.dataset.id)
        
        link.addEventListener("click", event => {
            content.innerHTML = list[link.dataset.id]["text"]
        });
    }
)




