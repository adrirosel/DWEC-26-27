retrieveAndShowJoke()

async function retrieveAndShowJoke(){
    const url = 'https://api.chucknorris.io/jokes/random';

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('tParJoke').textContent = await translateFromEnglishToSpanish(data.value)
}

async function translateFromEnglishToSpanish(sentenceInEnglish){
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${sentenceInEnglish}`

    const response = await fetch(url)
    const data = await response.json()

    return data[0][0][0]
}