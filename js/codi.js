function cambiaPagGaleria() {
    document.getElementById("menu").style.opacity = 0;
    document.getElementById("menu").style.display = "none";
    document.getElementById("galeria").style.opacity = 1;
    document.getElementById("galeria").style.display = "block";
    document.getElementById("menu").style.position = "absolute";
}

function paginaBack() {
    document.getElementById("menu").style.opacity = 1;
    document.getElementById("menu").style.position = "relative";
    document.getElementById("galeria").style.opacity = 0;
    document.getElementById("galeria").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("creditos").style.display = "none";
}

function cambiaPagCreditos() {
    document.getElementById("menu").style.opacity = 0;
    document.getElementById("menu").style.display = "none";
    document.getElementById("creditos").style.display = "block";
}

function jugar() {
    document.getElementById("juego").style.opacity = 1;
    document.getElementById("juego").style.display = "block";
    document.getElementById("menu").style.opacity = 0;
    document.getElementById("menu").style.display = "none";
 

    crearRandom();
}

function desapareixer() {
    document.getElementById("apuesta").style.opacity = 0;
    document.getElementById("apuesta").style.pointerEvents = "none";
    document.getElementById('campana').play();
    
}


//random 1
function crearRandom() {
    Barajar = cartas.sort(function () {
        return 0.5 - Math.random();
    });

    for (i = 0; i < 2; i++) {
        var carta = document.getElementById("cart" + i);
        carta.setAttribute("src", Barajar[i].carta);
    }
}

//random 2
function ganadorRandom(id) {
    Barajar = ganador.sort(function () {
        return 0.5 - Math.random();
    });

    for (i = 0; i < 2; i++) {
        var carta = document.getElementById("carta" + i);
        carta.classList.add(Barajar[i].carta);
        
    }
    if (document.getElementById(id).className == "winner") {
        document.getElementById("txtFinal").innerHTML="Tu carta ha ganado";
        
        //random 3
        setTimeout(function() { 
            let musicaRandom = Math.floor(Math.random() * musicaganador.length); 
            $("#audioWinner").attr("src",musicaganador[musicaRandom].musicag);
            audioWinner.play(); },7000);
    }else{
        document.getElementById("txtFinal").innerHTML="Tu carta ha perdido";
        setTimeout(function() { 
            let musicaRandomperder = Math.floor(Math.random() * musicaperdedor.length); 
            $("#audioLoser").attr("src",musicaperdedor[musicaRandomperder].musicap);
            audioLoser.play(); },7000);
    }
    
    
    let tl = new TimelineLite();
    var gif = document.getElementById("gif");
    var txt = document.getElementById("txt");
    var boton = document.getElementById("boton");
    document.getElementById('audio').play();
    

    tl.to(gif, 2, {
        display: "flex",
    }).to(gif, 1, {
        display: "none",
    }).to(txt, 1, {
        display: "flex",
        opacity: "1",
        transitionDelay: "2s",
    }).to(boton, 1, {
        opacity: "1",
    });
};



var musicaganador = [{
    //Musica ganar
    musicag: "sound/efecto-de-sonido-aplausos-del-publico.mp3"
            }, {
    musicag: "sound/Hallelujah Chorus Sound Effect.mp3"
              }, {
    musicag: "sound/videoke score ringtone.mp3"
            },{
    musicag: "sound/Epic_Win.mp3"
            }, {
    musicag: "sound/Celebration - Sound Effect [HD].mp3"
            }, {
    musicag: "sound/Fanfare Victory - Sound Effect [HD].mp3"
            }
                    ]

var musicaperdedor = [{
    //Musica perder
    musicap: "sound/evil-laugh-sound-effect.mp3"
            }, {
    musicap: "sound/sonido-de-decepcion.mp3"
              },{
    musicap: "sound/you-suck-vanoss-sound-effects.mp3"
              },{
    musicap: "sound/free-life-lost-game-over-sound-effect.mp3"
              }, {
    musicap: "sound/PewDiePie Sad Song (MLG) - Sound Effect [HD].mp3"
              }, {
    musicap: "sound/Epic Fail - Sound Effect [HD].mp3"
              }
                    ]



var ganador = [{
    //Cartas
    carta: "winner"
            }, {
    carta: "loser"
              }]

var cartas = [{
    //Cartas
    carta: "img/cartas/cart0.svg"
            }, {
    carta: "img/cartas/cart1.svg"
              }, {
    carta: "img/cartas/cart2.svg"
              }, {
    carta: "img/cartas/cart3.svg"
              }, {
    carta: "img/cartas/cart4.svg"
              }, {
    carta: "img/cartas/cart5.svg"
              }, {
    carta: "img/cartas/cart6.svg"
              }, {
    carta: "img/cartas/cart7.svg"
              }, {
    carta: "img/cartas/cart8.svg"
              }, {
    carta: "img/cartas/cart9.svg"
              }, {
    carta: "img/cartas/cart10.svg"
              }, {
    carta: "img/cartas/cart11.svg"
              }, {
    carta: "img/cartas/cart12.svg"
              }, {
    carta: "img/cartas/cart13.svg"
              }, {
    carta: "img/cartas/cart14.svg"
              }, {
    carta: "img/cartas/cart15.svg"
              }, {
    carta: "img/cartas/cart16.svg"
              }, {
    carta: "img/cartas/cart17.svg"
              }, {
    carta: "img/cartas/cart18.svg"
              }]



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});









