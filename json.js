function forClick(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => forOutput(data))
}
forClick()
function forOutput(newData){
    const sectionId =document.getElementById('section-id')
    sectionId.classList.add('styleme')
    for(const info of newData){
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <h2>Name:${info.name}</h2>
        <p>Email:${info.email}</p>
        `;
        sectionId.appendChild(newDiv)
    }
} 