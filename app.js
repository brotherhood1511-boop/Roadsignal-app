let alerts = [];

function addAlert() {

const input = document.getElementById("alertInput");
const alertText = input.value;

alerts.push(alertText);

renderAlerts();

input.value = "";

}

function renderAlerts() {

const list = document.getElementById("alerts");
list.innerHTML = "";

alerts.forEach(function(alert) {

const li = document.createElement("li");
li.textContent = alert;

list.appendChild(li);

});

}