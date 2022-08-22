document.getElementById("calculated").addEventListener("click", function () {
    const playerField = document.getElementById("per-player-field");
    const playerFieldString = playerField.value;
    const playerValue = parseFloat(playerFieldString);


    const playerlenth = document.getElementById("select-player").children.length;

    // player expence
    const playerExpenceElement = document.getElementById("player-expenses");
    const playerExpenceString = playerExpenceElement.innerText;
    const playerExpenceValue = parseFloat(playerExpenceString);
    const newPlayerExpance = playerValue * playerlenth;
    playerExpenceElement.innerText = newPlayerExpance;
})

document.getElementById("calculated-total").addEventListener('click', function () {
    const playerExpenceElement = document.getElementById("player-expenses");
    const playerExpenceString = playerExpenceElement.innerText;
    const playerExpenceValue = parseFloat(playerExpenceString);

    const managerExpenceElement = document.getElementById("manager-expenses");
    const managerExpenceString = managerExpenceElement.value;
    const managerExpenceValue = parseFloat(managerExpenceString);

    const coachExpenceElement = document.getElementById("coach-expenses");
    const coachExpenceString = coachExpenceElement.value;
    const coachExpenceValue = parseFloat(coachExpenceString);

    const totalCost = playerExpenceValue + managerExpenceValue + coachExpenceValue;

    const totalCostElement = document.getElementById("total-ammount");
    const totalCostString = totalCostElement.innerText;
    const totalCostValue = parseFloat(totalCostString);
    const newTotal = totalCost + totalCostValue;
    totalCostElement.innerText = newTotal;


})

// button add to select-v
const array = [];
function displayName(players) {
    const secectV = document.getElementById("select-player");

    if (players.length > 5) {
        alert("Dont add players");

    }
    else {
        secectV.innerHTML = '';
        for (let i = 0; i < players.length; i++) {

            const player = players[i];
            const tr = document.createElement('tr');

            tr.innerHTML = `  
            <th> ${i + 1} </th>
            
            <td>${player} </td>
            `

            secectV.appendChild(tr);
        }
    }

}
function addToCard(event) {
    // console.log(event.parentNode.children[0].innerText);
    const playerName = event.parentNode.children[0].innerText;
    array.push(playerName);
    // console.log(array)
    displayName(array);
    event.classList.add("disabled");

}