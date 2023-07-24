//! ------------Global Variables------------
var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var siteContainer = [];
if (localStorage.getItem("Site") != null) {
  siteContainer = JSON.parse(localStorage.getItem("Site"));
  retriveSite();
}

//! ------------- Functions ----------------
//? Create Site Function
function createSite() {
  var site = {
    siteName: siteNameInput.value,
    siteURL: siteURLInput.value,
  };
  siteContainer.push(site);
  localStorage.setItem("Site", JSON.stringify(siteContainer));
  retriveSite();
  clearForm();
}

//? Retrive Site Function
function retriveSite() {
  container = "";
  for (var i = 0; i < siteContainer.length; i++) {
    container += ` <tr>
        <td>${i + 1}</td>
        <td>${siteContainer[i].siteName}</td>
        <td><button class="btn btn-info"><i class="fa-regular fa-eye"></i> <a href="${
          siteURLInput.value
        }" target="_blank">Visite</a></button></td>
        <td><button onclick="delSite(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i> Delete</button></td></tr> 
        `;
  }
  document.getElementById("tableBody").innerHTML = container;
}
//? Clear Form Function
function clearForm() {
  siteNameInput.value = "";
  siteURLInput.value = "";
}

//? Delete Site Function
function delSite(index) {
  siteContainer.splice(index, 1);
  localStorage.setItem("Site", JSON.stringify(siteContainer));
  retriveSite();
}
