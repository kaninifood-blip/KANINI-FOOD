const dishes = [
    { name: " بيتزا سامبل ", price: "30 دج ", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500" },
    { name: " بيتزا بولي ", price: "35دج", img: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500" },
    { name: " بيتزا طون ", price: "35دج", img: "https://images.unsplash.com/photo-1541758713021-9963953460e4?q=80&w=500" },
    { name: " بيتزا كوفار ", price: "45دج", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500" },
    { name: " بيتزا 4 فصور ", price: "60دج", img: "https://images.unsplash.com/photo-1601050690597-df056fb0179a?q=80&w=500" },
    { name: " طاكوس بولي ", price: "35دج", img: "https://images.unsplash.com/photo-1560614382-3334f3460022?q=80&w=500" },
    { name: " طاكوس كبدة ", price: "45دج", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=500" },
    { name: " بيتزا بولي ", price: "50دج", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=500" },
    { name: " سندويتش ماريني  ", price: "25دج", img: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?q=80&w=500" },
    { name: " سوندويتش شاورما ", price: "25دج", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=500" },
    { name: " سوندويتش كبدة ", price: "35دج", img: "https://images.unsplash.com/photo-1547592115-f996c81b13bf?q=80&w=500" },
    { name: " سوندويتش ميلونج  ", price: "35دج", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500" }
];

const menuGrid = document.getElementById('menu-grid');
dishes.forEach(dish => {
    menuGrid.innerHTML += `
        <div class="menu-card">
            <img src="${dish.img}" alt="${dish.name}">
            <div class="card-content">
                <h3>${dish.name}</h3>
                <span class="price">${dish.price}</span>
                <a href="#order" class="btn-card-order">اطلب الآن</a>
            </div>
        </div>
    `;
});

window.onscroll = function() {
    const header = document.getElementById("main-header");
    if (window.scrollY > 80) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

};
