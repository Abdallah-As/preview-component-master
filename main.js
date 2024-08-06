let svg = document.getElementById("svg");
let list = document.getElementById("list");
let svgP = document.getElementById("svgP");

// svg.onclick = function() {
    


//     svg.onclick = function() {
//         
//     }
// }

    svg.addEventListener("click" , (eo) => {
        list.classList.remove("hide");
        svg.style.backgroundColor = "hsl(212, 23%, 69%)";
    
        svg.addEventListener("click" , (eo) => {
            list.classList.add("hide");
            svg.style.backgroundColor = "hsl(210, 46%, 95%)";
        })
    })




