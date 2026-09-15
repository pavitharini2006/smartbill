/* =========================================================
   SMART MART SUPERMARKET BILLING SYSTEM
   Frontend only - LocalStorage based
========================================================= */


/* ================= PRODUCT DATABASE ================= */

const PRODUCTS = [

    {id:"P001",name:"India Gate Basmati Rice 5kg",category:"Rice & Grains",price:620,stock:35,gst:5,icon:"🍚"},
    {id:"P002",name:"Ponni Rice 5kg",category:"Rice & Grains",price:320,stock:28,gst:5,icon:"🍚"},
    {id:"P003",name:"Aashirvaad Atta 5kg",category:"Rice & Grains",price:285,stock:22,gst:5,icon:"🌾"},
    {id:"P004",name:"Sona Masoori Rice 5kg",category:"Rice & Grains",price:350,stock:31,gst:5,icon:"🍚"},
    {id:"P005",name:"Wheat Rava 1kg",category:"Rice & Grains",price:58,stock:42,gst:5,icon:"🌾"},

    {id:"P006",name:"Toor Dal 1kg",category:"Pulses",price:165,stock:27,gst:5,icon:"🫘"},
    {id:"P007",name:"Moong Dal 1kg",category:"Pulses",price:145,stock:33,gst:5,icon:"🫘"},
    {id:"P008",name:"Urad Dal 1kg",category:"Pulses",price:150,stock:29,gst:5,icon:"🫘"},
    {id:"P009",name:"Chana Dal 1kg",category:"Pulses",price:95,stock:45,gst:5,icon:"🫘"},
    {id:"P010",name:"Masoor Dal 1kg",category:"Pulses",price:110,stock:38,gst:5,icon:"🫘"},

    {id:"P011",name:"Fortune Sunflower Oil 1L",category:"Cooking Oil",price:145,stock:25,gst:5,icon:"🫗"},
    {id:"P012",name:"Gold Winner Sunflower Oil 1L",category:"Cooking Oil",price:155,stock:19,gst:5,icon:"🫗"},
    {id:"P013",name:"Groundnut Oil 1L",category:"Cooking Oil",price:185,stock:24,gst:5,icon:"🫗"},
    {id:"P014",name:"Coconut Oil 500ml",category:"Cooking Oil",price:125,stock:17,gst:5,icon:"🥥"},
    {id:"P015",name:"Olive Oil 500ml",category:"Cooking Oil",price:420,stock:12,gst:5,icon:"🫒"},

    {id:"P016",name:"Parle-G Biscuits",category:"Snacks",price:20,stock:70,gst:5,icon:"🍪"},
    {id:"P017",name:"Britannia Good Day",category:"Snacks",price:35,stock:54,gst:5,icon:"🍪"},
    {id:"P018",name:"Lays Classic Salted",category:"Snacks",price:20,stock:63,gst:12,icon:"🥔"},
    {id:"P019",name:"Kurkure Masala Munch",category:"Snacks",price:20,stock:59,gst:12,icon:"🌶️"},
    {id:"P020",name:"Haldiram's Bhujia 200g",category:"Snacks",price:72,stock:21,gst:12,icon:"🥨"},

    {id:"P021",name:"Coca-Cola 750ml",category:"Beverages",price:45,stock:48,gst:28,icon:"🥤"},
    {id:"P022",name:"Pepsi 750ml",category:"Beverages",price:45,stock:46,gst:28,icon:"🥤"},
    {id:"P023",name:"Frooti 1L",category:"Beverages",price:55,stock:40,gst:12,icon:"🧃"},
    {id:"P024",name:"Thums Up 750ml",category:"Beverages",price:45,stock:37,gst:28,icon:"🥤"},
    {id:"P025",name:"Real Fruit Juice 1L",category:"Beverages",price:125,stock:20,gst:12,icon:"🧃"},

    {id:"P026",name:"Aavin Milk 1L",category:"Dairy Products",price:55,stock:50,gst:0,icon:"🥛"},
    {id:"P027",name:"Aavin Curd 500g",category:"Dairy Products",price:40,stock:34,gst:0,icon:"🥛"},
    {id:"P028",name:"Amul Butter 100g",category:"Dairy Products",price:58,stock:26,gst:12,icon:"🧈"},
    {id:"P029",name:"Amul Cheese 200g",category:"Dairy Products",price:145,stock:18,gst:12,icon:"🧀"},
    {id:"P030",name:"Paneer 200g",category:"Dairy Products",price:95,stock:16,gst:5,icon:"🧀"},

    {id:"P031",name:"Apple 1kg",category:"Fruits",price:180,stock:14,gst:0,icon:"🍎"},
    {id:"P032",name:"Banana 1kg",category:"Fruits",price:65,stock:30,gst:0,icon:"🍌"},
    {id:"P033",name:"Orange 1kg",category:"Fruits",price:90,stock:18,gst:0,icon:"🍊"},
    {id:"P034",name:"Mango 1kg",category:"Fruits",price:120,stock:11,gst:0,icon:"🥭"},
    {id:"P035",name:"Pomegranate 1kg",category:"Fruits",price:210,stock:9,gst:0,icon:"🍎"},

    {id:"P036",name:"Tomato 1kg",category:"Vegetables",price:45,stock:25,gst:0,icon:"🍅"},
    {id:"P037",name:"Potato 1kg",category:"Vegetables",price:38,stock:32,gst:0,icon:"🥔"},
    {id:"P038",name:"Onion 1kg",category:"Vegetables",price:42,stock:29,gst:0,icon:"🧅"},
    {id:"P039",name:"Carrot 1kg",category:"Vegetables",price:70,stock:20,gst:0,icon:"🥕"},
    {id:"P040",name:"Beans 500g",category:"Vegetables",price:55,stock:13,gst:0,icon:"🫛"},

    {id:"P041",name:"Lux Soap 100g",category:"Personal Care",price:38,stock:44,gst:18,icon:"🧼"},
    {id:"P042",name:"Dove Soap 100g",category:"Personal Care",price:58,stock:31,gst:18,icon:"🧼"},
    {id:"P043",name:"Clinic Plus Shampoo 175ml",category:"Personal Care",price:105,stock:23,gst:18,icon:"🧴"},
    {id:"P044",name:"Colgate Toothpaste 200g",category:"Personal Care",price:115,stock:27,gst:18,icon:"🪥"},
    {id:"P045",name:"Dettol Handwash 200ml",category:"Personal Care",price:95,stock:20,gst:18,icon:"🧴"},

    {id:"P046",name:"Surf Excel Matic 2kg",category:"Household Items",price:295,stock:15,gst:18,icon:"🧺"},
    {id:"P047",name:"Vim Dishwash Gel 500ml",category:"Household Items",price:125,stock:22,gst:18,icon:"🧴"},
    {id:"P048",name:"Harpic Toilet Cleaner 500ml",category:"Household Items",price:110,stock:19,gst:18,icon:"🧴"},
    {id:"P049",name:"Good Knight Refill",category:"Household Items",price:95,stock:24,gst:18,icon:"🦟"},
    {id:"P050",name:"Scotch-Brite Scrub Pad",category:"Household Items",price:35,stock:40,gst:18,icon:"🧽"},

    {id:"P051",name:"Tata Tea 500g",category:"Beverages",price:285,stock:17,gst:5,icon:"🍵"},
    {id:"P052",name:"Nescafe Classic 100g",category:"Beverages",price:310,stock:13,gst:18,icon:"☕"},
    {id:"P053",name:"Sugar 1kg",category:"Rice & Grains",price:48,stock:60,gst:5,icon:"🧂"},
    {id:"P054",name:"Salt 1kg",category:"Rice & Grains",price:28,stock:65,gst:0,icon:"🧂"},
    {id:"P055",name:"Tomato Ketchup 500g",category:"Snacks",price:115,stock:18,gst:12,icon:"🍅"},
    {id:"P056",name:"Corn Flakes 500g",category:"Snacks",price:245,stock:10,gst:18,icon:"🥣"}

];


/* ================= DEFAULT SETTINGS ================= */

const DEFAULT_SETTINGS = {

    name: "SMART MART",

    address: "123 Main Road, Tamil Nadu, India",

    phone: "+91 98765 43210"

};


/* ================= APPLICATION STATE ================= */

let products =
    JSON.parse(localStorage.getItem("smartmart_products")) ||
    PRODUCTS.map(product => ({...product}));

let cart =
    JSON.parse(localStorage.getItem("smartmart_cart")) ||
    [];

let bills =
    JSON.parse(localStorage.getItem("smartmart_bills")) ||
    [];

let settings =
    JSON.parse(localStorage.getItem("smartmart_settings")) ||
    {...DEFAULT_SETTINGS};

let paymentMethod = "Cash";

let lastInvoice = null;


/* ================= HELPER ================= */

const $ = id => document.getElementById(id);


function money(value) {

    return Number(value || 0).toLocaleString("en-IN", {

        style: "currency",

        currency: "INR",

        minimumFractionDigits: 2

    });

}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ================= LOCAL STORAGE ================= */

function saveData() {

    localStorage.setItem(
        "smartmart_products",
        JSON.stringify(products)
    );

    localStorage.setItem(
        "smartmart_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "smartmart_bills",
        JSON.stringify(bills)
    );

    localStorage.setItem(
        "smartmart_settings",
        JSON.stringify(settings)
    );

}


/* ================= TOAST ================= */

function showToast(message, type = "") {

    const container = $("toastContainer");

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}


/* ================= PAGE NAVIGATION ================= */

function goToPage(page) {

    document.querySelectorAll(".page").forEach(section => {

        section.classList.remove("active");

    });

    const selectedPage = $("page-" + page);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    document.querySelectorAll(".nav-item").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === page
        );

    });


    if (page === "dashboard") {

        renderDashboard();

    }

    if (page === "products") {

        renderProducts();

    }

    if (page === "billing") {

        renderCart();

        updateTotals();

    }

    if (page === "history") {

        renderHistory();

    }

}


document.querySelectorAll(".nav-item").forEach(button => {

    button.addEventListener("click", () => {

        goToPage(button.dataset.page);

    });

});


/* ================= CLOCK ================= */

function updateClock() {

    const now = new Date();

    $("liveDateTime").textContent =
        now.toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short"
        });

}


setInterval(updateClock, 1000);


/* ================= CATEGORIES ================= */

function populateCategories() {

    const select = $("categoryFilter");

    const categories = [
        ...new Set(products.map(product => product.category))
    ];

    select.innerHTML =
        `<option value="all">All Categories</option>`;

    categories.forEach(category => {

        select.innerHTML += `
            <option value="${escapeHTML(category)}">
                ${escapeHTML(category)}
            </option>
        `;

    });

}


/* ================= PRODUCT DISPLAY ================= */

function renderProducts() {

    const grid = $("productGrid");

    const search =
        $("productSearch").value
        .trim()
        .toLowerCase();

    const category =
        $("categoryFilter").value;

    const sort =
        $("sortProducts").value;


    let filtered = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.id.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    });


    if (sort === "name") {

        filtered.sort((a,b) =>
            a.name.localeCompare(b.name)
        );

    }

    if (sort === "priceLow") {

        filtered.sort((a,b) =>
            a.price - b.price
        );

    }

    if (sort === "priceHigh") {

        filtered.sort((a,b) =>
            b.price - a.price
        );

    }

    if (sort === "stockLow") {

        filtered.sort((a,b) =>
            a.stock - b.stock
        );

    }


    if (!filtered.length) {

        grid.innerHTML = `
            <div class="panel">
                <p>No products found.</p>
            </div>
        `;

        return;

    }


    grid.innerHTML = filtered.map(product => {

        let stockClass = "stock-ok";

        let stockText = `${product.stock} in stock`;

        if (product.stock === 0) {

            stockClass = "stock-out";

            stockText = "Out of stock";

        }

        else if (product.stock < 10) {

            stockClass = "stock-low";

            stockText = `Low stock: ${product.stock}`;

        }


        return `

            <div class="product-card">

                <div class="product-icon">
                    ${product.icon}
                </div>

                <div class="product-id">
                    ${product.id}
                </div>

                <div class="product-name">
                    ${escapeHTML(product.name)}
                </div>

                <div class="product-category">
                    ${escapeHTML(product.category)}
                </div>

                <div class="product-price">
                    ${money(product.price)}
                </div>

                <div class="product-stock ${stockClass}">
                    ${stockText} · GST ${product.gst}%
                </div>

                <button
                    class="add-cart-btn"
                    ${product.stock === 0 ? "disabled" : ""}
                    onclick="addToCart('${product.id}')"
                >
                    ${product.stock === 0
                        ? "Out of Stock"
                        : "＋ Add to Cart"}
                </button>

            </div>

        `;

    }).join("");

}


/* ================= ADD TO CART ================= */

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product) {

        showToast("Product not found.", "error");

        return;

    }


    if (product.stock <= 0) {

        showToast("Product is out of stock.", "error");

        return;

    }


    const existing =
        cart.find(item => item.id === productId);


    if (existing) {

        if (existing.qty >= product.stock) {

            showToast(
                `Only ${product.stock} units available.`,
                "warning"
            );

            return;

        }

        existing.qty++;

    }

    else {

        cart.push({
            id: productId,
            qty: 1
        });

    }


    saveData();

    updateCartIndicator();

    renderCart();

    updateTotals();

    showToast(
        `${product.name} added to cart.`,
        "success"
    );

}


/* ================= CHANGE QUANTITY ================= */

function changeQty(productId, amount) {

    const item =
        cart.find(item => item.id === productId);

    const product =
        products.find(product => product.id === productId);


    if (!item || !product) return;


    const newQty = item.qty + amount;


    if (newQty <= 0) {

        removeItem(productId);

        return;

    }


    if (newQty > product.stock) {

        showToast(
            `Maximum available stock is ${product.stock}.`,
            "warning"
        );

        return;

    }


    item.qty = newQty;

    saveData();

    renderCart();

    updateTotals();

    updateCartIndicator();

}


/* ================= REMOVE ================= */

function removeItem(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    saveData();

    renderCart();

    updateTotals();

    updateCartIndicator();

    showToast("Item removed from cart.", "success");

}


/* ================= CLEAR CART ================= */

function clearCart() {

    if (!cart.length) {

        showToast("Cart is already empty.", "warning");

        return;

    }


    if (!confirm("Clear all items from the current cart?")) {

        return;

    }


    cart = [];

    saveData();

    renderCart();

    updateTotals();

    updateCartIndicator();

    showToast("Cart cleared.", "success");

}


/* ================= CART DETAILS ================= */

function getCartDetails() {

    return cart.map(item => {

        const product =
            products.find(product => product.id === item.id);

        if (!product) return null;

        const lineTotal =
            product.price * item.qty;

        const gst =
            lineTotal * product.gst / 100;

        return {

            ...product,

            qty: item.qty,

            lineTotal,

            gstAmount: gst

        };

    }).filter(Boolean);

}


/* ================= CART DISPLAY ================= */

function renderCart() {

    const container =
        $("cartContainer");

    const details =
        getCartDetails();


    $("cartItemLabel").textContent =
        `${details.reduce((sum,item) => sum + item.qty,0)} items`;


    if (!details.length) {

        container.innerHTML = `
            <div class="cart-empty">

                <div style="font-size:40px;">
                    🛒
                </div>

                <p>Your cart is empty.</p>

                <button
                    class="primary-btn"
                    onclick="goToPage('products')"
                    style="margin-top:12px;"
                >
                    Browse Products
                </button>

            </div>
        `;

        return;

    }


    container.innerHTML = details.map(item => `

        <div class="cart-row">

            <div class="cart-product">

                <strong>
                    ${item.icon}
                    ${escapeHTML(item.name)}
                </strong>

                <small>
                    ${item.id} · ${money(item.price)}
                </small>

            </div>


            <div class="qty-control">

                <button
                    onclick="changeQty('${item.id}', -1)"
                >
                    −
                </button>

                <span>
                    ${item.qty}
                </span>

                <button
                    onclick="changeQty('${item.id}', 1)"
                >
                    ＋
                </button>

            </div>


            <strong>
                ${money(item.lineTotal)}
            </strong>


            <button
                class="remove-btn"
                onclick="removeItem('${item.id}')"
                title="Remove"
            >
                ×
            </button>

        </div>

    `).join("");

}


/* ================= CART INDICATOR ================= */

function updateCartIndicator() {

    const count =
        cart.reduce((total,item) =>
            total + item.qty, 0);

    $("navCartCount").textContent = count;

    $("statCart").textContent = count;

}


/* ================= CALCULATE BILL ================= */

function calculateBill() {

    const details =
        getCartDetails();

    const subtotal =
        details.reduce(
            (sum,item) => sum + item.lineTotal,
            0
        );


    let discount =
        Number($("discountInput").value) || 0;


    if (discount < 0) {

        discount = 0;

    }


    if (discount > subtotal) {

        discount = subtotal;

        $("discountInput").value =
            subtotal.toFixed(2);

    }


    const gst =
        details.reduce(
            (sum,item) => sum + item.gstAmount,
            0
        );


    const grandTotal =
        Math.max(
            0,
            subtotal - discount + gst
        );


    return {
        details,
        subtotal,
        discount,
        gst,
        grandTotal
    };

}


/* ================= UPDATE TOTALS ================= */

function updateTotals() {

    const bill =
        calculateBill();

    $("subtotal").textContent =
        money(bill.subtotal);

    $("gstAmount").textContent =
        money(bill.gst);

    $("grandTotal").textContent =
        money(bill.grandTotal);


    updateChange();

}


/* ================= PAYMENT ================= */

document.querySelectorAll(".payment-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".payment-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            paymentMethod =
                button.dataset.payment;


            $("cashBox").style.display =
                paymentMethod === "Cash"
                    ? "block"
                    : "none";


            updateChange();

        });

    });


/* ================= CASH CHANGE ================= */

function updateChange() {

    const bill =
        calculateBill();

    const received =
        Number($("cashReceived").value) || 0;

    const change =
        Math.max(
            0,
            received - bill.grandTotal
        );


    $("changeAmount").textContent =
        money(change);

}


$("cashReceived").addEventListener(
    "input",
    updateChange
);

$("discountInput").addEventListener(
    "input",
    updateTotals
);


/* ================= BILL NUMBER ================= */

function createBillNumber() {

    const now = new Date();

    const datePart =
        now.getFullYear().toString() +
        String(now.getMonth()+1).padStart(2,"0") +
        String(now.getDate()).padStart(2,"0");


    const randomPart =
        Math.floor(
            1000 + Math.random() * 9000
        );


    return `SM-${datePart}-${randomPart}`;

}


/* ================= COMPLETE PAYMENT ================= */

function completePayment() {

    /* 1. Validate cart */

    if (!cart.length) {

        showToast(
            "Cannot complete payment. Cart is empty.",
            "error"
        );

        return;

    }


    /* 2. Validate quantities */

    const details =
        getCartDetails();


    for (const item of details) {

        const currentProduct =
            products.find(
                product => product.id === item.id
            );


        if (!currentProduct) {

            showToast(
                `Product ${item.id} no longer exists.`,
                "error"
            );

            return;

        }


        if (
            item.qty <= 0 ||
            item.qty > currentProduct.stock
        ) {

            showToast(
                `Invalid quantity for ${item.name}.`,
                "error"
            );

            return;

        }

    }


    /* 3. Validate mobile */

    const mobile =
        $("customerMobile").value.trim();


    if (
        mobile &&
        !/^[0-9]{10}$/.test(mobile)
    ) {

        showToast(
            "Mobile number must contain exactly 10 digits.",
            "error"
        );

        return;

    }


    /* 4. Calculate */

    const bill =
        calculateBill();


    if (bill.grandTotal <= 0) {

        showToast(
            "Bill total must be greater than zero.",
            "error"
        );

        return;

    }


    /* 5. Validate cash */

    const cashReceived =
        Number($("cashReceived").value) || 0;


    if (paymentMethod === "Cash") {

        if (cashReceived < bill.grandTotal) {

            showToast(
                `Insufficient cash. Need ${money(
                    bill.grandTotal - cashReceived
                )} more.`,
                "error"
            );

            return;

        }

    }


    /* 6. Confirm payment */

    const confirmed =
        confirm(
            `Confirm payment of ${money(
                bill.grandTotal
            )} using ${paymentMethod}?`
        );


    if (!confirmed) {

        showToast(
            "Payment cancelled.",
            "warning"
        );

        return;

    }


    /* 7. Create unique bill */

    let billNumber =
        createBillNumber();


    while (
        bills.some(
            bill => bill.billNo === billNumber
        )
    ) {

        billNumber =
            createBillNumber();

    }


    const now =
        new Date();


    /* 8. Reduce stock */

    details.forEach(item => {

        const product =
            products.find(
                product => product.id === item.id
            );

        product.stock -= item.qty;

    });


    /* 9. Create bill */

    const newBill = {

        id: crypto.randomUUID
            ? crypto.randomUUID()
            : Date.now().toString(),

        billNo: billNumber,

        date: now.toISOString(),

        customer:
            $("customerName").value.trim()
            || "Walk-in Customer",

        mobile:
            mobile || "-",

        items:
            details.map(item => ({

                id: item.id,

                name: item.name,

                price: item.price,

                qty: item.qty,

                gst: item.gst,

                lineTotal: item.lineTotal,

                gstAmount: item.gstAmount,

                icon: item.icon

            })),

        subtotal: bill.subtotal,

        discount: bill.discount,

        gst: bill.gst,

        grandTotal: bill.grandTotal,

        payment: paymentMethod,

        cashReceived:
            paymentMethod === "Cash"
                ? cashReceived
                : bill.grandTotal,

        change:
            paymentMethod === "Cash"
                ? cashReceived - bill.grandTotal
                : 0,

        status: "Completed"

    };


    /* 10. Save bill */

    bills.unshift(newBill);

    saveData();


    /* 11. Store invoice */

    lastInvoice = newBill;


    /* 12. Show invoice */

    showInvoice(newBill);


    /* 13. Clear cart only after successful payment */

    cart = [];


    $("customerName").value = "";

    $("customerMobile").value = "";

    $("discountInput").value = "0";

    $("cashReceived").value = "";


    paymentMethod = "Cash";


    document.querySelectorAll(".payment-btn")
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.payment === "Cash"
            );

        });


    $("cashBox").style.display = "block";


    saveData();

    renderCart();

    updateTotals();

    updateCartIndicator();

    renderProducts();

    renderDashboard();

    renderHistory();


    showToast(
        `Bill ${billNumber} completed successfully.`,
        "success"
    );

}


/* ================= INVOICE HTML ================= */

function invoiceHTML(bill) {

    const itemRows =
        bill.items.map((item,index) => `

            <tr>

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${escapeHTML(item.name)}
                </td>

                <td>
                    ${item.qty}
                </td>

                <td>
                    ${money(item.price)}
                </td>

                <td>
                    ${item.gst}%
                </td>

                <td>
                    ${money(item.lineTotal)}
                </td>

            </tr>

        `).join("");


    const date =
        new Date(bill.date);


    return `

        <div class="invoice" id="printInvoice">

            <div class="invoice-head">

                <h1>
                    ${escapeHTML(settings.name)}
                </h1>

                <p>
                    Supermarket & Daily Essentials
                </p>

                <p>
                    ${escapeHTML(settings.address)}
                </p>

                <p>
                    Phone: ${escapeHTML(settings.phone)}
                </p>

            </div>


            <div class="invoice-details">

                <div>
                    <strong>Bill No:</strong>
                    ${escapeHTML(bill.billNo)}
                </div>

                <div>
                    <strong>Date:</strong>
                    ${date.toLocaleDateString("en-IN")}
                </div>

                <div>
                    <strong>Time:</strong>
                    ${date.toLocaleTimeString("en-IN")}
                </div>

                <div>
                    <strong>Customer:</strong>
                    ${escapeHTML(bill.customer)}
                </div>

                <div>
                    <strong>Mobile:</strong>
                    ${escapeHTML(bill.mobile)}
                </div>

                <div>
                    <strong>Payment:</strong>
                    ${escapeHTML(bill.payment)}
                </div>

            </div>


            <table class="invoice-table">

                <thead>

                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>GST</th>
                        <th>Total</th>
                    </tr>

                </thead>

                <tbody>

                    ${itemRows}

                </tbody>

            </table>


            <div class="invoice-summary">

                <div>
                    <span>Subtotal</span>
                    <strong>${money(bill.subtotal)}</strong>
                </div>

                <div>
                    <span>Discount</span>
                    <strong>-${money(bill.discount)}</strong>
                </div>

                <div>
                    <span>GST / Tax</span>
                    <strong>${money(bill.gst)}</strong>
                </div>

                <div class="invoice-grand">
                    <span>Grand Total</span>
                    <strong>${money(bill.grandTotal)}</strong>
                </div>

                <div>
                    <span>Payment</span>
                    <strong>${escapeHTML(bill.payment)}</strong>
                </div>

                ${
                    bill.payment === "Cash"
                    ? `
                        <div>
                            <span>Cash Received</span>
                            <strong>${money(bill.cashReceived)}</strong>
                        </div>

                        <div>
                            <span>Change</span>
                            <strong>${money(bill.change)}</strong>
                        </div>
                    `
                    : ""
                }

            </div>


            <div class="invoice-thanks">

                <p>
                    <strong>Payment Status: COMPLETED</strong>
                </p>

                <p>
                    Thank you for shopping with ${escapeHTML(settings.name)}!
                </p>

                <p>
                    Please visit us again.
                </p>

            </div>

        </div>

    `;

}


/* ================= SHOW INVOICE ================= */

function showInvoice(bill) {

    lastInvoice = bill;

    $("invoiceContent").innerHTML =
        invoiceHTML(bill);

    $("invoiceModal")
        .classList.remove("hidden");

}


/* ================= CLOSE INVOICE ================= */

function closeInvoice() {

    $("invoiceModal")
        .classList.add("hidden");

}


/* ================= PRINT ================= */

function printInvoice() {

    if (!lastInvoice) {

        showToast(
            "No invoice available.",
            "error"
        );

        return;

    }

    window.print();

}


/* ================= DOWNLOAD INVOICE ================= */

function downloadInvoice() {

    if (!lastInvoice) {

        showToast(
            "No invoice available.",
            "error"
        );

        return;

    }


    const invoice =
        invoiceHTML(lastInvoice);


    const completeHTML = `

        <!DOCTYPE html>

        <html>

        <head>

            <meta charset="UTF-8">

            <title>
                ${lastInvoice.billNo}
            </title>

            <style>

                body {
                    font-family: Arial;
                    padding: 30px;
                }

                .invoice {
                    max-width: 800px;
                    margin: auto;
                }

                .invoice-head {
                    text-align: center;
                    border-bottom: 2px solid #111;
                    padding-bottom: 15px;
                }

                .invoice-details {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin: 20px 0;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th, td {
                    border-bottom: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }

                .invoice-summary {
                    width: 300px;
                    margin-left: auto;
                    margin-top: 20px;
                }

                .invoice-summary div {
                    display: flex;
                    justify-content: space-between;
                    padding: 7px;
                }

                .invoice-grand {
                    border-top: 2px solid #111;
                    font-size: 18px;
                    font-weight: bold;
                }

                .invoice-thanks {
                    text-align: center;
                    margin-top: 30px;
                }

            </style>

        </head>

        <body>

            ${invoice}

        </body>

        </html>

    `;


    const blob =
        new Blob(
            [completeHTML],
            {type: "text/html"}
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        `${lastInvoice.billNo}.html`;


    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);


    showToast(
        "Invoice downloaded.",
        "success"
    );

}


/* ================= HISTORY ================= */

function renderHistory() {

    const search =
        $("billSearch").value
        .trim()
        .toLowerCase();


    const dateFilter =
        $("billDateFilter").value;


    let filtered =
        bills.filter(bill => {

            const matchesSearch =
                bill.billNo.toLowerCase().includes(search) ||
                bill.customer.toLowerCase().includes(search);


            let matchesDate = true;


            if (dateFilter) {

                const billDate =
                    new Date(bill.date)
                    .toISOString()
                    .split("T")[0];

                matchesDate =
                    billDate === dateFilter;

            }


            return matchesSearch && matchesDate;

        });


    const totalSales =
        filtered.reduce(
            (sum,bill) =>
                sum + Number(bill.grandTotal),
            0
        );


    $("historyTotal").textContent =
        money(totalSales);


    if (!filtered.length) {

        $("historyTable").innerHTML = `

            <div class="cart-empty">
                No bills found.
            </div>

        `;

        return;

    }


    $("historyTable").innerHTML = `

        <div class="table-wrap">

            <table class="data-table">

                <thead>

                    <tr>

                        <th>Bill No</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>


                <tbody>

                    ${filtered.map(bill => {

                        const itemCount =
                            bill.items.reduce(
                                (sum,item) =>
                                    sum + item.qty,
                                0
                            );


                        const date =
                            new Date(bill.date);


                        return `

                            <tr>

                                <td>
                                    <strong>
                                        ${escapeHTML(bill.billNo)}
                                    </strong>
                                </td>

                                <td>
                                    ${date.toLocaleDateString("en-IN")}
                                </td>

                                <td>
                                    ${escapeHTML(bill.customer)}
                                </td>

                                <td>
                                    ${itemCount}
                                </td>

                                <td>
                                    <strong>
                                        ${money(bill.grandTotal)}
                                    </strong>
                                </td>

                                <td>
                                    ${escapeHTML(bill.payment)}
                                </td>

                                <td>
                                    <span class="status completed">
                                        Completed
                                    </span>
                                </td>

                                <td>

                                    <button
                                        class="view-btn"
                                        onclick="viewBill('${bill.id}')"
                                    >
                                        View
                                    </button>

                                </td>

                            </tr>

                        `;

                    }).join("")}

                </tbody>

            </table>

        </div>

    `;

}


/* ================= VIEW OLD BILL ================= */

function viewBill(id) {

    const bill =
        bills.find(
            bill => bill.id === id
        );


    if (!bill) {

        showToast(
            "Bill not found.",
            "error"
        );

        return;

    }


    showInvoice(bill);

}


/* ================= DASHBOARD ================= */

function renderDashboard() {

    const today =
        new Date()
        .toISOString()
        .split("T")[0];


    const todayBills =
        bills.filter(bill => {

            return new Date(bill.date)
                .toISOString()
                .split("T")[0] === today;

        });


    const sales =
        todayBills.reduce(
            (sum,bill) =>
                sum + Number(bill.grandTotal),
            0
        );


    $("statSales").textContent =
        money(sales);


    $("statBills").textContent =
        todayBills.length;


    $("statProducts").textContent =
        products.length;


    updateCartIndicator();


    /* LOW STOCK */

    const lowStock =
        products
        .filter(product =>
            product.stock < 10
        )
        .sort((a,b) =>
            a.stock - b.stock
        )
        .slice(0,6);


    if (!lowStock.length) {

        $("lowStockList").innerHTML =
            `<p>No low stock products.</p>`;

    }

    else {

        $("lowStockList").innerHTML =
            lowStock.map(product => `

                <div class="low-stock-item">

                    <div>

                        <strong>
                            ${product.icon}
                            ${escapeHTML(product.name)}
                        </strong>

                        <small>
                            ${product.id}
                        </small>

                    </div>

                    <span class="low-stock-count">
                        ${product.stock} left
                    </span>

                </div>

            `).join("");

    }


    /* RECENT BILLS */

    const recent =
        bills.slice(0,5);


    if (!recent.length) {

        $("recentBills").innerHTML = `

            <div class="cart-empty">
                No bills generated yet.
            </div>

        `;

        return;

    }


    $("recentBills").innerHTML = `

        <div class="table-wrap">

            <table class="data-table">

                <thead>

                    <tr>
                        <th>Bill</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                    </tr>

                </thead>

                <tbody>

                    ${recent.map(bill => `

                        <tr>

                            <td>
                                ${escapeHTML(bill.billNo)}
                            </td>

                            <td>
                                ${escapeHTML(bill.customer)}
                            </td>

                            <td>
                                <strong>
                                    ${money(bill.grandTotal)}
                                </strong>
                            </td>

                            <td>
                                ${escapeHTML(bill.payment)}
                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;

}


/* ================= NEW BILL ================= */

function newBill() {

    if (cart.length) {

        const answer =
            confirm(
                "Start a new bill? Current cart items will be cleared."
            );


        if (!answer) return;

    }


    cart = [];

    $("customerName").value = "";

    $("customerMobile").value = "";

    $("discountInput").value = "0";

    $("cashReceived").value = "";


    paymentMethod = "Cash";


    document.querySelectorAll(".payment-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.payment === "Cash"
            );

        });


    $("cashBox").style.display = "block";


    saveData();

    updateCartIndicator();

    renderCart();

    updateTotals();


    $("billNumberPreview").textContent =
        "New Bill";


    closeInvoice();

    goToPage("billing");

}


/* ================= NEW BILL AFTER INVOICE ================= */

function newBillFromInvoice() {

    closeInvoice();

    newBill();

}


/* ================= SETTINGS ================= */

function loadSettings() {

    $("storeNameSetting").value =
        settings.name;

    $("storeAddressSetting").value =
        settings.address;

    $("storePhoneSetting").value =
        settings.phone;

}


function saveSettings() {

    const name =
        $("storeNameSetting")
        .value
        .trim();


    const address =
        $("storeAddressSetting")
        .value
        .trim();


    const phone =
        $("storePhoneSetting")
        .value
        .trim();


    if (!name) {

        showToast(
            "Store name cannot be empty.",
            "error"
        );

        return;

    }


    if (!address) {

        showToast(
            "Address cannot be empty.",
            "error"
        );

        return;

    }


    if (!phone) {

        showToast(
            "Phone number cannot be empty.",
            "error"
        );

        return;

    }


    settings = {

        name,
        address,
        phone

    };


    saveData();

    showToast(
        "Settings saved successfully.",
        "success"
    );


    renderDashboard();

}


/* ================= RESET DATA ================= */

function resetData() {

    const confirmed =
        confirm(
            "Reset all products, bills, cart and settings?"
        );


    if (!confirmed) return;


    products =
        PRODUCTS.map(product => ({
            ...product
        }));


    cart = [];

    bills = [];


    settings =
        {...DEFAULT_SETTINGS};


    paymentMethod = "Cash";

    lastInvoice = null;


    saveData();

    populateCategories();

    loadSettings();

    renderProducts();

    renderCart();

    renderHistory();

    renderDashboard();

    updateTotals();

    updateCartIndicator();


    showToast(
        "Demo data has been reset.",
        "success"
    );

}


/* ================= SEARCH EVENTS ================= */

$("productSearch").addEventListener(
    "input",
    renderProducts
);

$("categoryFilter").addEventListener(
    "change",
    renderProducts
);

$("sortProducts").addEventListener(
    "change",
    renderProducts
);

$("billSearch").addEventListener(
    "input",
    renderHistory
);

$("billDateFilter").addEventListener(
    "change",
    renderHistory
);


/* ================= INITIALIZATION ================= */

function init() {

    updateClock();

    populateCategories();

    loadSettings();

    renderProducts();

    renderCart();

    renderHistory();

    renderDashboard();

    updateTotals();

    updateCartIndicator();


    $("cashBox").style.display =
        "block";

}


document.addEventListener(
    "DOMContentLoaded",
    init
);