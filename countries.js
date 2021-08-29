const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
    
}
loadCountries()
const displayCountries = allData => {
    const coutryDiv = document.getElementById('countries')
    allData.forEach(x => {
        const div = document.createElement('div')
        div.classList.add('forStyle')
        
        div.innerHTML = `
        <h2>Name:${x.name}</h2>
        <h4>Capital:${x.capital}</h4>
        <button onclick="clickMore('${x.name}')">Details </button>
        `;
        coutryDiv.appendChild(div)

    })
}
const clickMore = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => clickMoreOkay(data[0]))
}

const clickMoreOkay = data =>{
    console.log(data)
    const pID = document.getElementById('pID')
    pID.innerHTML = `
    <h5>${data.name}</h5>
    <p>population:${data.population}</p>
    <img width="200px" src="${data.flag}">
    `
    
}