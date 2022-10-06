const menuButton = document.querySelector(".m-menu")
const menuButton2 = document.querySelector(".m-menu2")
const menu = document.querySelector(".SPAN")
const menu2 = document.querySelector(".choice")
const all_products = document.querySelector("#all-products")
const giroscooters = document.querySelector("#giroscooter")
const scooters = document.querySelector("#scooter")
const sigvei = document.querySelector("#sigvei")
const ids = ['sigveis1', 'sigveis2', 'giroscooters', 'scooters']
const buttons = ["all-products", "giroscooter", "scooter", "sigvei"]

menuButton.addEventListener("click", () => {
    console.log('Кликнули по меню');
    menu.classList.toggle("is-open");
});
menuButton2.addEventListener("click", () => {
    console.log('Кликнули по меню');
    menu2.classList.toggle("is-open2");
});

function chancgeBg(selector) {
    buttons.forEach((item) => {
        if(item === selector) return document.querySelector(`#${item}`).style = "background: #e68600;"
        document.querySelector(`#${item}`).style = "background: #ffffff;"
    })
}

all_products.addEventListener('click' , () => {
    chancgeBg("all-products")
    ids.forEach((item) => {
        document.querySelector(`#${item}`).style = "opacity: 1"
    }) 
})

giroscooters.addEventListener('click' , () => {
    chancgeBg("giroscooter")
    ids.forEach((item) => {
        if(item === 'giroscooters') return document.querySelector(`#${item}`).style = "opacity: 1"
        document.querySelector(`#${item}`).style = "opacity: 0"
    })
})

scooters.addEventListener('click' , () => {
    chancgeBg("scooter")
    ids.forEach((item) => {
        if(item === 'scooters') return document.querySelector(`#scooters`).style = "opacity: 1"
        document.querySelector(`#${item}`).style = "opacity: 0"
    })
})

sigvei.addEventListener('click' , () => {
    chancgeBg("sigvei")
    ids.forEach((item) => {
        if(item.includes('sigveis')) return document.querySelector(`#${item}`).style = "opacity: 1"
        document.querySelector(`#${item}`).style = "opacity: 0"
    })
})