const dishes = [
    { name: "بيتزا سامبل", price: "30 دج", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500" },
    { name: "بيتزا بولي", price: "35 دج", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500" },
    { name: "بيتزا طون", price: "35 دج", img: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=500" },
    { name: "بيتزا كوفار", price: "45 دج", img: "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=500" },
    { name: "بيتزا 4 فصول", price: "60 دج", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=500" },
    { name: "طاكوس بولي", price: "35 دج", img: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=500" },
    { name: "طاكوس كبدة", price: "45 دج", img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=500" },
    { name: "بيتزا بولي كبيرة", price: "50 دج", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500" },
    { name: "سندويتش ماريني", price: "25 دج", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=500" },
    { name: "سندويتش شاورما", price: "25 دج", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=500" },
    { name: "سندويتش كبدة", price: "35 دج", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=500" },
    { name: "سندويتش ميلونج", price: "35 دج", img: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?q=80&w=500" }
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
