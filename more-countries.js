const countryDetails = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}
countryDetails();
const displayCountryDetails = country =>{
    const divContainer = document.getElementById('div-container')
    country.forEach(x => {
        const div =document.createElement('div')
        div.classList.add('styleMe')
        div.innerHTML = `
        <h2>${x.name}</h2>
        
        <button onclick="details('${x.name}')">Details</button>
        `;
        divContainer.appendChild(div)
    })
}
const details = what => {
    const url = `https://restcountries.eu/rest/v2/name/${what}`
    fetch(url)
    .then(res => res.json())
    .then(data => allDetails(data[0]))
}
const allDetails = info => {
    console.log(info)
    const firstDiv = document.getElementById('first-div')
    firstDiv.classList.add('first-div')
    firstDiv.innerHTML = `
    <h2>Name:${info.name}</h2>
    <h4>Capital:${info.capital}</h4>
    <h4>Population:${info.population}</h4>
    <h4>Borders:${info.borders}</h4>
    <h4>Region:${info.region}</h4>
    <h4>Sub-Region:${info.subregion}</h4>

    
    <img width="100px" src="${info.flag}">
   
    `;
}