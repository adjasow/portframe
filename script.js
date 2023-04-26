const txtAnim = document.querySelector('h2');

new Typewriter(txtAnim, {
    //deleteSpeed:20
    loop:true,
})
.typeString('Je suis Ndeye Maréme Sow')
//faire apparaitre le texte
.pauseFor(300)
.deleteChars(24)
//supprimer le texte
.typeString('Flexible')
.pause(600)
.deleteChars(8)
.typeString('Motivée')
.pause(900)
.deleteChars(7)
.typeString('Compréhensive')
.pause(900)
.deleteChars('13')
.typeString('Créative')
.start()