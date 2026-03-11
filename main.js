    if(window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("news.html")){
        // Inicializar popovers directamente ya que el script se carga al final
        console.log("Inicializando popovers...");
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        console.log("Elementos encontrados:", popoverTriggerList.length);
        const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            console.log("Creando popover para:", popoverTriggerEl);
            return new bootstrap.Popover(popoverTriggerEl);
        });
        console.log("Popovers inicializados:", popoverList.length);

        document.getElementById("post-1").onclick = function(){
            window.location.href = "./artemis.html";
        };

        document.getElementById("post-2").onclick = function(){
            window.location.href = "./astronauta.html";
        };

        document.getElementById("post-3").onclick = function(){
            window.location.href = "./artemis.html";
        };

        document.getElementById("post-4").onclick = function(){
            window.location.href = "./astronauta.html";
        };
    }
    

    if(!(window.location.pathname.endsWith("astronauta.html") || window.location.pathname.endsWith("artemis.html"))){

    function mostrarFecha() {
        const hoy = new Date();
        const opciones = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        document.getElementById("fecha-actual").textContent = hoy.toLocaleDateString('es-ES', opciones);
    }

    mostrarFecha();

    const toggleButton = document.getElementById("toggle-mode");
    const navTexto = document.getElementById("mi-nav");
    toggleButton.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("modo-oscuro", "true");
            navTexto.setAttribute("data-bs-theme", "dark");
        } else {
            localStorage.setItem("modo-oscuro", "false");
            navTexto.setAttribute("data-bs-theme", "light");
            toggleButton.setAttribute("src", "images/moon.svg");    
        }
    });

    if(localStorage.getItem("modo-oscuro") === "true"){
        document.body.classList.add("dark-mode");
        navTexto.setAttribute("data-bs-theme", "dark");}

    }else{
        if(localStorage.getItem("modo-oscuro") === "true"){
        document.body.classList.add("dark-mode");
        navTexto.setAttribute("data-bs-theme", "dark");}
    }

