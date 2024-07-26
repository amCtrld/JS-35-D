const name = document.getElementById("name");
const category = document.getElementById("category"); // Corrected spelling
const quantity = document.getElementById("quantity");
const buyingPrice = document.getElementById("buyingPrice");
const sellingPrice = document.getElementById("sellingPrice");
const description = document.getElementById("description");
const submit = document.getElementById("submit");
const table = document.getElementById("table");

submit.addEventListener("click", () => {
  const product = {
    name: name.value,
    category: category.value,
    quantity: quantity.value,
    buyingPrice: buyingPrice.value,
    sellingPrice: sellingPrice.value,
    description: description.value,
  };


  const row = table.insertRow();


  const nameCell = row.insertCell();
  const categoryCell = row.insertCell();
  const quantityCell = row.insertCell();
  const buyingPriceCell = row.insertCell();
  const sellingPriceCell = row.insertCell();
  const descriptionCell = row.insertCell();


  nameCell.textContent = product.name;
  categoryCell.textContent = product.category;
  quantityCell.textContent = product.quantity;
  buyingPriceCell.textContent = product.buyingPrice;
  sellingPriceCell.textContent = product.sellingPrice;
  descriptionCell.textContent = product.description;

  name.value = "";
  category.value = "";
  quantity.value = "";
  buyingPrice.value = "";
  sellingPrice.value = "";
  description.value = "";
});
