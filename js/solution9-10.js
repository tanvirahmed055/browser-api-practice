// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে।

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে।


const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const product of cart) {
        displayProductDetails(product.name, product.quantity, product.price);
    }
}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;

    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = [];
    }
    return cartObj;
}

const addItem = () => {
    const productName = document.getElementById("product-name").value;
    const productPriceText = document.getElementById("product-price").value;
    const productPriceNumber = parseFloat(productPriceText);

    if (!productName || !productPriceText) {
        return;
    } else {

        //add to localStorage
        addProductToLocalStorageCart(productName, productPriceNumber);
        location.reload();
        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";
    }
}




const displayProductDetails = (name, quantity, price) => {
    const ul = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = `Name: ${name} Quantity${quantity} Price:${price}`;
    ul.appendChild(li);
}


const addProductToLocalStorageCart = (name, price) => {
    const cart = getCart();
    let update = 0;
    for (const product of cart) {
        if (product['name'] === name) {
            product['price'] = product['price'] + price;
            product['quantity'] += 1;
            update += 1;
        }

    }
    if (update === 0) {
        const prodDetails = {};
        prodDetails['name'] = name;
        prodDetails['price'] = price;
        prodDetails['quantity'] = 1;
        cart.push(prodDetails);

    }


    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById("products").textContent = "";
    localStorage.removeItem('cart');
}
displayLocalStorageCart();