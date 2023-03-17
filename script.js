let menuVisible = false;

//Função que oculta ou mostra o menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function selecionar(){

    // o menu e guardado uma vez que eu seleciono uma opção

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Função que aplica as animações das habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacao");
        habilidades[6].classList.add("trabalho");
        habilidades[7].classList.add("criatividade");
        habilidades[8].classList.add("dedicacao");
        habilidades[9].classList.add("gestão");
    }
}


//Detector de rolagem para aplicar a animação da barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
}