let submitRequest = document.getElementById("submit-request");
let mainH1 = document.getElementById("hero-h1");

submitRequest.addEventListener("click", () => {
  ChangeText();
});

function ChangeText() {
  mainH1.innerHTML = "Please search here first?";
}
