setupButton();
setupRange();

function setupRange(){
    const nRange = document.getElementById('tInpRange');
    nRange.addEventListener('change', updateQuantity);

    function updateQuantity(e) {
        const quantity = nRange.value;
        document.getElementById('tLablNumber').value = quantity;
    }
}

async function retrieveNames(e){
    const nRange = document.getElementById('tInpRange')
    const quantity = parseInt(nRange.value)

    const rMale = document.getElementById('rMale')
    const rFemale = document.getElementById('rFemale')
    let genres = 'both';
    if(rMale.checked){
        genres = 'male'
    } else if(rFemale.checked){
        genres = 'female'
    }

    try{
        const response = await fetch(`https://namey.muffinlabs.com/name.json?count=${quantity}&type=${genres}`)
        const data = await response.json()
    
        renderNames(data)

    }catch(e){
        alert(e.message)
    }
}

async function setupButton(){
    const nButton = document.getElementById('tButtonNames')
    nButton.addEventListener('click', retrieveNames)
}

function renderNames(names){
    const nOl = document.getElementById('tOlNames')
    nOl.innerHTML = ''

    names.forEach(name => {
        const nLi = document.createElement('li')
        nOl.appendChild(nLi)
        nLi.textContent = name
    })
}