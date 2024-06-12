let input = document.querySelector("#input");
let button = document.querySelector("#button");
let image = document.querySelector(".qrCodeImg");

button.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue.length > 0) {
    let qrCodeAPI = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${inputValue}`;
    image.src = qrCodeAPI;
    image.className = "w-[250px] h-[250px] mt-[10px] self-center";
  }
  else{
    alert("Write Somthing");
    input.focus();
  }
})