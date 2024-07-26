const productName = document.getElementById("name");
        const category = document.getElementById("category");
        const quantity = document.getElementById("quantity");
        const buyingPrice = document.getElementById("buyingPrice");
        const sellingPrice = document.getElementById("sellingPrice");
        const description = document.getElementById("description");
        const submit = document.getElementById("submit");
        const table = document.getElementById("table").getElementsByTagName('tbody')[0];

        submit.addEventListener("click", () => {
            // Product object
            const product = {
                name: productName.value,
                category: category.value,
                quantity: quantity.value,
                buyingPrice: buyingPrice.value,
                sellingPrice: sellingPrice.value,
                description: description.value,
            };

            // Create a new row in the table
            const row = table.insertRow();

            // Create cells for each product property
            const productNameCell = row.insertCell();
            const categoryCell = row.insertCell();
            const quantityCell = row.insertCell();
            const buyingPriceCell = row.insertCell();
            const sellingPriceCell = row.insertCell();
            const descriptionCell = row.insertCell();

            // Populate the cells with product data
            productNameCell.textContent = product.name;
            categoryCell.textContent = product.category;
            quantityCell.textContent = product.quantity;
            buyingPriceCell.textContent = product.buyingPrice;
            sellingPriceCell.textContent = product.sellingPrice;
            descriptionCell.textContent = product.description;

            // Clear the form fields
            productName.value = "";
            category.value = "";
            quantity.value = "";
            buyingPrice.value = "";
            sellingPrice.value = "";
            description.value = "";
        });