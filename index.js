const regions = document.querySelector(".region");

const phil_region = [  'NATIONAL CAPITAL REGION',  'CALABARZON',  'CENTRAL LUZON',  'MIMAROPA',  'BICOL REGION',  'ILOCOS REGION',  'WESTERN VISAYAS',  'CENTRAL VISAYAS',  'DAVAO REGION']

let regionIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    regions.innerHTML = ` <h1> 
    ${phil_region[regionIndex].slice(0,0)}
    ${phil_region[regionIndex].slice(0,characterIndex)}</h1>`;

    if (characterIndex === phil_region[regionIndex].length){
        regionIndex++;
        characterIndex = 0;
    }

    if (regionIndex === phil_region.length){
        regionIndex = 0;
    }
    
    setTimeout(updateText, 120);
}
