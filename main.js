const planet = document.getElementById('planetSelect')
const weigh = document.getElementById('weigh')
const button = document.getElementById('submit')
const hidden = document.getElementById('span-hidden')
const planetImage = document.getElementById('planetImage')

const weighPlanet = {
    'MARS': {
        'gravity': 3.71,  
        'imgSrc': '/mars.png'
    },
    'MERCURY':{
        'gravity': 3.7,
        'imgSrc': '/mercury.jpeg'
    },
    'VENUS':{
        'gravity': 8.87,
        'imgSrc': '/venus.png'
    },
    'JUPITER':{
        'gravity': 24.79,
        'imgSrc': '/jupiter.png'
    }
}

planet.addEventListener('change', () => {
    const selectedPlanet = planet.value.toUpperCase();
    
    if (weighPlanet[selectedPlanet]) {
        if (weighPlanet[selectedPlanet].imgSrc) {
            planetImage.innerHTML = ''; // Limpa qualquer conteúdo anterior
            const img = document.createElement('img');
            img.src = weighPlanet[selectedPlanet].imgSrc;
            planetImage.appendChild(img);
        } else {
            planetImage.innerHTML = '';
        }
    } else {
        planetImage.innerHTML = '';
    }
})

button.addEventListener('click', () => {
    let weighOnX = 1 
    const planetChoosed = planet.value
    const upper = planetChoosed.toUpperCase()
    const massOnEarth = weigh.value

    const updateWeigh = () => {
        // Calcula a massa usando a fórmula P = m * g
        try {
            weighOnX = weigh.value * weighPlanet[upper]['gravity']
        } catch (err) {
            hidden.innerText = `Error ${err}`
        }
    }

    updateWeigh()
    const weighFixed = weighOnX.toFixed(2)
    const planetUpper = planet.value
    const planetToUpper = planetUpper[0].toUpperCase() + planetUpper.substring(1);
    hidden.innerText = `Your weigh on ${planetToUpper} is ${weighFixed}`
})