// const loadQuote =() =>{
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// }
// const displayQuote = quote => {
//     const blockQuote = document.getElementById('blockQuote');
//     blockQuote.innerText = quote.quote

// }

const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = fromThen =>{
    const block = document.getElementById('blockQuote')
    block.innerText = fromThen.quote;
}



// function loadQuote(){
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => callData(data))
// }

// function callData(allData){
//     console.log(allData)
//     const blockQuote = document.getElementById('blockQuote')
//     for(const info of allData){
        
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <h3>${info.quote}</h3>
//         `;
//         blockQuote.appendChild(div)
//         // console.log(info)
//     }

// }



// function loadQuote(){
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayData(data))
// }

// function displayData(newData){
//     // const blockQuote = document.getElementById('blockQuote')
//     for(const info of newData){
//         console.log(info)
//     //     const newH3 = document.createElement('h3')
//     //     newH3.innerText = `${info.quote}`
//     //     blockQuote.appendChild(newH3)
//     }
// }