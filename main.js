let authenSignUp = document.querySelector(".auth-form--signup");
let authenSignIn = document.querySelector(".auth-form--signin");
let modal = document.querySelector(".modal");
let backButtons = document.querySelectorAll(".auth-form__control-back");

// Open modal
let authenLinks = document.querySelectorAll(".navbar__item-link-authen");
for (let link of authenLinks) {
    link.addEventListener("click", function () {
        modal.classList.add("modal--open");
        if (link.classList.contains("navbar__item-link-authen--signup"))
            authenSignIn.classList.add("authen-form--hidden");
        else authenSignUp.classList.add("authen-form--hidden");
    });
}

// Remove modal
function closeModal() {
    modal.classList.remove("modal--open");
    authenSignIn.classList.remove("authen-form--hidden");
    authenSignUp.classList.remove("authen-form--hidden");
}

modal.addEventListener("click", closeModal);
for (btn of backButtons) {
    btn.addEventListener("click", closeModal);
}

// Prevent propagation
let modalBody = document.querySelector(".modal__body");
modalBody.addEventListener("click", function (e) {
    e.stopPropagation();
});

// Swith authen form
let signUpSwitch = document.querySelector(
    ".auth-form--signup .auth-form__switch-btn"
);
let signInSwitch = document.querySelector(
    ".auth-form--signin .auth-form__switch-btn"
);

signUpSwitch.addEventListener("click", function (e) {
    authenSignUp.classList.add("authen-form--hidden");
    authenSignIn.classList.remove("authen-form--hidden");
});

signInSwitch.addEventListener("click", function (e) {
    authenSignIn.classList.add("authen-form--hidden");
    authenSignUp.classList.remove("authen-form--hidden");
});

// Switch selection
let options = document.querySelectorAll(".search__box-option");
let selectionLabel = document.querySelector(".search__box-select-label");
let activeOption = options[0]; // first element acts like a flag.

const selectionTrigger = "search__box-option--active";
for (let option of options) {
    option.addEventListener("click", function () {
        activeOption.classList.remove(selectionTrigger);
        option.classList.add(selectionTrigger);
        activeOption = option;
        selectionLabel.textContent = option.textContent
            .replace("\n", "")
            .trim(" ");
    });
}

// Product handler
let removeButtonWrapper = document.querySelectorAll(
    ".cart__product-remove-wrapper"
);
let cartProduct = document.querySelectorAll(".cart__product-item");

for (let i = 0; i < removeButtonWrapper.length; i++) {
    const button = removeButtonWrapper[i];
    button.addEventListener("click", function (e) {
        cartProduct[i].classList.add("cart__product-item--removed");
        //Update cart quantity
        let cartQuantity = document.querySelector(".cart-quantity");
        let cartProducts = document.querySelectorAll(
            ".cart__product-item:not(.cart__product-item--removed)"
        );
        cartQuantity.textContent = cartProducts.length;

        if (cartProducts.length == 0) {
            let hasProduct = document.querySelector(".cart__list--has-product");

            hasProduct.classList.remove("cart__list--has-product");

            let emptyCart = document.querySelector(".cart-wrapper .cart__list");

            emptyCart.classList.add("cart__list--empty");
        }
    });
}

// Category
const types = [
    "Grass",
    "Water",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy",
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
];

let categoryList = document.querySelector(".category-list");
types.forEach(function (e) {
    let type = document.createElement("li");
    type.classList.add("category-item");
    type.innerHTML = `
    <a href="#" class="category-item__link">${e}</a>
    `;
    categoryList.appendChild(type);
});

let categoryItem = document.querySelectorAll(".category-item");
let activeCategoryItem = categoryItem[0];
let categoryTrigger = "category-item--active";

for (const item of categoryItem) {
    item.addEventListener("click", function (e) {
        activeCategoryItem.classList.remove(categoryTrigger);
        item.classList.add(categoryTrigger);
        activeCategoryItem = item;
    });
}

// Filter buttons
let filterButtons = document.querySelectorAll(".home-filter__btn");
let acticveFilterButton = filterButtons[1];

for (const button of filterButtons) {
    button.addEventListener("click", function (e) {
        acticveFilterButton.classList.remove("btn--primary");
        button.classList.add("btn--primary");
        acticveFilterButton = button;
    });
}

// Filter selection
let filterOptions = document.querySelectorAll(".select-input__item");
let filterLabel = document.querySelector(".select-input__label");

for (const option of filterOptions) {
    option.addEventListener("click", function (e) {
        filterLabel.textContent = option.textContent
            .replace("\n", "")
            .trim(" ");
    });
}

// Add products
let numberOfProducts = 9;
let products = document.querySelector(".home-product .row");

for (let i = 0; i < numberOfProducts; i++) {
    let newProduct = document.createElement("div");
    newProduct.classList.add("l-2-4");
    newProduct.classList.add("m-4");
    newProduct.classList.add("c-12");
    newProduct.innerHTML = `
<div class="col">
    <a class="home-product-item" href="#">
    <div class="home-product-item__img" style="background-image: url(https://cdnb.artstation.com/p/assets/images/images/017/714/067/large/antoine-van-bergen-masterball-avb.jpg?1557075802&dl=1), url(https://thumbs.dreamstime.com/b/placeholder-rgb-color-icon-image-gallery-photo-thumbnail-available-album-digital-media-multimedia-file-visual-content-snapshot-187369540.jpg);"></div>
        <h4 class="home-product-item__name">The Master Ball (Japanese: マスターボール Master Ball) is a type of Poké Ball introduced in Generation I. It can be used to catch a wild Pokémon without fail</h4>
        <div class="home-product-item__price">
            <span class="home-product-item__price-old">1.200.000đ</span>
            <span class="home-product-item__price-current">684.000đ</span>
        </div>

        <div class="home-product-item__action">
            <span class="home-product-item__like home-product-item__like--liked">
                <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
            </span>
            <div class="home-product-item__rating">
                <i class="home-product-item-star--gold fa-solid fa-star"></i>
                <i class="home-product-item-star--gold fa-solid fa-star"></i>
                <i class="home-product-item-star--gold fa-solid fa-star"></i>
                <i class="home-product-item-star--gold fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div class="home-product-item-sold">88 Đã bán</div>
        </div>

        <div class="home-product-item__origin">
            <span class="home-product-item__brand">Konami</span>
            <span class="home-product-item__country">Nhật Bản</span>
        </div>

        <div class="home-product-item__favourite">
            <i class="fa-solid fa-check"></i>
            <span>Yêu thích</span>
        </div>

        <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">43%</span>
            <span class="home-product-item__sale-off-label">GIẢM</span>
        </div>
        
    </a>
</div>
`;
    products.appendChild(newProduct);
}


// Like button
let likeSections = document.querySelectorAll(".home-product-item__like");
const likeTrigger = "home-product-item__like--liked";

for (const section of likeSections) {
    for (const likeBtn of section.childNodes) {
        likeBtn.addEventListener("click", function () {
            if (section.classList.contains(likeTrigger)) {
                section.classList.remove(likeTrigger);
            } else {
                section.classList.add(likeTrigger);
            }
        });
    }
}


// Pagination button

let pagiButtons = document.querySelectorAll(".pagination__item:not(.pagination__item--disabled)");
let pagiTrigger = "pagination__item--active"
let activePagiButton = document.querySelector(`.${pagiTrigger}`);

for (let i = 1; i < pagiButtons.length - 1; i++) {
    const button = pagiButtons[i]
    button.addEventListener("click", function (event) {
        event.preventDefault();
        activePagiButton.classList.remove(pagiTrigger);
        button.classList.add(pagiTrigger);
        activePagiButton = button;
    })
}

// Header Sort 

let headerSortButtons = document.querySelectorAll(".header__sort-item")
let headerSortTrigger = "header__sort-item--active"
let activeHeaderSortButton = document.querySelector(`.${headerSortTrigger}`)

for (const button of headerSortButtons) {
    button.addEventListener("click", function(){
        activeHeaderSortButton.classList.remove(headerSortTrigger)
        button.classList.add(headerSortTrigger)
        activeHeaderSortButton = button;
    })
    
}

// Disable anchor default

let anchorTags = document.querySelectorAll('a');
for (const tag of anchorTags) {
    tag.addEventListener("click", function (e) {
        e.preventDefault();
    });
}