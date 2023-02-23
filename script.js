const boxes = document.querySelectorAll(".box"),
image = document.querySelector(".image");

boxes.forEach((box) => {
    box.addEventListener("dragover", (e)=>{
        e.preventDefault();
        box.classList.add("hovered")
    })
    box.addEventListener("dragleave", (e)=>{
        e.preventDefault();
        box.classList.remove("hovered")
    })
    box.addEventListener("drop", (e)=>{
        e.preventDefault();
        box.appendChild(image);
        box.classList.remove("hovered")
    })
})

