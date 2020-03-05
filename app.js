
const SpeechRecognation = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognation()

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

speak = function (transcript) {
    let speech = new SpeechSynthesisUtterance()
    speech.text = transcript
    speech.volume = 1
    speech.pitch = 0.8
    window.speechSynthesis.speak(speech)
}
const speechonmount = 'Welcome to javascript voice to text to voice made by Harshit'
speak(speechonmount)
const speech1 = 'LEts go'
speak(speech1)

recognition.onstart = function () {
    speak('Start speaking')
}


recognition.onresult = function( event ) {
    var speech = event.results[0][0].transcript.split(' ')

    if(speech[1] == 'colour')
    {
        var body = document.querySelector('body')
        body.setAttribute('style','background-color:'+speech[3]||speech[0]||speech[1])
    }
    console.log(speech)
    speak(event.results[0][0].transcript)
    let text1 = document.getElementById('content')
    var new1 = document.createElement('p')
    new1.textContent = event.results[0][0].transcript
    text1.appendChild(new1)
  
}


btn.addEventListener('click',function(){
    recognition.start()
})