const queryParams = new URLSearchParams(window.location.search);
const frontpageLogo = document.getElementById("frontpage_logo");

/**
 * Updates the logo used on the frontpage.
 */
const updateLogoFromQueryParam = () => {
    const logoValue = queryParams.get('logo');
    if (logoValue && frontpageLogo) {
        console.log(`Updating logo to ${logoValue}`);
        frontpageLogo.src = logoValue;
        frontpageLogo.srcset = logoValue;
    }
};

/**
 * Updates the config products to match the apps passed in the query parameters.
 */
function updateConfigProducts() {
    const optionalAndroidPublicKey = queryParams.get('optionalAndroidPublicKey');
    const optionaliOSPublicKey = queryParams.get('optionaliOSPublicKey');
    const optionalAppName = queryParams.get('optionalAppName');

    if (!optionalAndroidPublicKey  {
        return;
    }

    config.products = [];
    if (optionalAndroidPublicKey) {
        const name = `${optionalAppName ?? "Demo App"} (Android)`;
        const product = {
            name: name,
            publicKey: optionalAndroidPublicKey,
            device: "pixel8",
        };
        config.products.push(product);
    }
}

/**
 * Updates a CSS variable from a query parameter.
 * @param variableName The name of the CSS variable.
 * @param queryParamName The name of the query parameter.
 */
const updateCSSVariable = (variableName, queryParamName) => {
    if (queryParams.has(queryParamName)) {
        const value = queryParams.get(queryParamName);
        console.log(`Updating ${variableName} to ${value}`);
        document.documentElement.style.setProperty(variableName, value);
    }
};

document.addEventListener('DOMContentLoaded', updateLogoFromQueryParam);
updateCSSVariable('--bs-primary', 'primaryColor');
updateCSSVariable('--bs-primary-dark', 'primaryColorDark');
updateCSSVariable('--bs-foreground', 'primaryForegroundColor');
updateConfigProducts();
