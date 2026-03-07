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
        window.location.href = "artemis.html";
    };

    document.getElementById("post-2").onclick = function(){
        window.location.href = "astronauta.html";
    };

    document.getElementById("post-3").onclick = function(){
        window.location.href = "artemis.html";
    };

    document.getElementById("post-4").onclick = function(){
        window.location.href = "astronauta.html";
    };