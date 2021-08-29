const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => callArrow(data))
}
loadBuddy()
const callArrow = allData => {
    const allBuddies = allData.results
    const divContainer = document.getElementById('buddies')
    for(const myBuddies of allBuddies){
        const p = document.createElement('p')
        p.innerText = `Name:${myBuddies.name.title} ${myBuddies.name.first} ${myBuddies.name.last} and Gender:${myBuddies.gender};
        ${myBuddies.phone}`;
        divContainer.appendChild(p)
        console.log(myBuddies)
    }
    
}