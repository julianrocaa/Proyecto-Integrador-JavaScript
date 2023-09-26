const productsContainer = document.querySelector(".products-container")
const categoriesContainer = document.querySelector(".categorias")
const categoriesList = document.querySelectorAll(".categories")
const cartButton = document.querySelector(".cart-label")

const createProductTemplate = (producto) => {
    const { id, nombre, precio, productImg } = producto;
    return `


    <div class="product">
                    <img src=${productImg} alt=${nombre} class="img-products">
                    <div class="product-info">

                        <div class="product-top">
                            <h3>${nombre}</h3>
                            <p><span>${precio}</span></p>
                        </div>

                        <div class="product-bot">
                            <div class="botones-talles">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                            </div>
                               <button class="agregar-al-carrito" data-id='${id}' data-name='${nombre}' data-price='${precio}' data-img='${productImg}'
                               >Agregar al carrito</button>
                        </div>
                    </div>
                </div>`;
}; 

// PRODUCTOS

const renderProducts = (productsList) => {
    productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

// CATEGORIAS 

const applyFilter = ({ target }) => {
    if(!inactiveFilter(target)) return;
    changeFilterState(target);
    productsContainer.innerHTML = '';
    if(appState.activeFilter) {
        renderFilterProducts();
        appState.currentProductsIndex = 0;
        return;
    }
    renderProducts(appState.products[0])
};

const renderFilterProducts = () => {
    const filterProducts = prendasRopa.filter(
        (producto) => producto.category === appState.activeFilter
    );
    renderProducts(filterProducts);
}

const inactiveFilter = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    );
};

const changeFilterState = (buttonCategory) => {
    appState.activeFilter = buttonCategory.dataset.category;
    changeButtonActiveState(appState.activeFilter);

}

const changeButtonActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryButton) => {
        if (categoryButton.dataset.category !== selectedCategory) {
            categoryButton.classList.remove ("remove");
            return;
        }
        categoryButton.classList.add("active");
    })
}

// CARRITO



const init = () => {
    renderProducts(prendasRopa);
    categoriesContainer.addEventListener("click", applyFilter);
    cartButton.addEventListener("click", toggleCart);
}

init();



