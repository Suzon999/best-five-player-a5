
document.getElementById("calculated").addEventListener("click", function () {
    const playerValue = getInputValueByID("per-player-field");
    // add childern id 
    const playerlenth = document.getElementById("select-player").children.length;
    // player expence
    const playerExpenceElement = document.getElementById("player-expenses");
    const newPlayerExpance = playerValue * playerlenth;
    playerExpenceElement.innerText = newPlayerExpance;
})

document.getElementById("calculated-total").addEventListener('click', function () {
    const playerExpenceValue = getInputElementByid("player-expenses");
    const managerExpenceValue = getInputValueByID("manager-expenses");
    const coachExpenceValue = getInputValueByID("coach-expenses");

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
    event.classList.add("disabled",);
}