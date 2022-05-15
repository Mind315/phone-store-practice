class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = "";
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                    </tr>
                `;

                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table class="shopping__table">
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">Сумма: </td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₽</td>
                    </tr>
                </table>
            </div>
            <div class="shopping__bg-lock"></div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
