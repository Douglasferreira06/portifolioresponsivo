document.addEventListener("DOMContentLoaded", function() {
    const div1 = document.querySelector(".div1");
   

    // Adiciona a classe 'animated' após um pequeno atraso para cada div
    setTimeout(() => {
        div1.classList.add("animated");
    }, 2000); // atraso de 1000ms

    
});

document.addEventListener("DOMContentLoaded", function() {
    const div2 = document.querySelector(".div2");
   

    // Adiciona a classe 'animated' após um pequeno atraso para cada div
    
    setTimeout(() => {
        div2.classList.add("animated2");
    },3000); // atraso de 200ms
});
