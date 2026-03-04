const dishes = [
    { name: "مشوي زمالة الملكي", price: "4500 د.ج", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500" },
    { name: "طاجين العين باللوز", price: "2800 د.ج", img: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500" },
    { name: "كسكسي زمالة الأصيل", price: "2400 د.ج", img: "https://images.unsplash.com/photo-1541758713021-9963953460e4?q=80&w=500" },
    { name: "شوا مشكل إمبراطوري", price: "3500 د.ج", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500" },
    { name: "بوراك عنابي بريستيج", price: "900 د.ج", img: "https://images.unsplash.com/photo-1601050690597-df056fb0179a?q=80&w=500" },
    { name: "مثوم باللحم الصافي", price: "2600 د.ج", img: "https://images.unsplash.com/photo-1560614382-3334f3460022?q=80&w=500" },
    { name: "شطيطحة دجاج حارة", price: "1800 د.ج", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=500" },
    { name: "طاجين زيتون ملكي", price: "2200 د.ج", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=500" },
    { name: "قلب اللوز باللوز الحر", price: "700 د.ج", img: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?q=80&w=500" },
    { name: "تحلية الشوكولاتة الفاخرة", price: "1200 د.ج", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=500" },
    { name: "شربة فريك ملكية", price: "1000 د.ج", img: "https://images.unsplash.com/photo-1547592115-f996c81b13bf?q=80&w=500" },
    { name: "خبز الدار بالسينوج", price: "400 د.ج", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500" }
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