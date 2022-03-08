// Initialize new SpeechSynthesisUtterance object
const speech = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis;
const apiURL = "https://v2.jokeapi.dev/joke/Programming";

// Get jokes from Joke API and set Speech text value to received joke
async function getJokes() {
    try{
        const response = await fetch(apiURL);
        const data = await response.json();

        if(data.setup){
            speech.text = `${data.setup} ... ${data.delivery}`;
        }
        else{
            speech.text = `${data.joke}`;
        }
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById("button").addEventListener("click", () => {
    getJokes();
    synth.cancel();
    synth.speak(speech);
});
