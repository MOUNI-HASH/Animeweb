const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Show the alert to the user
        alert('Product added to cart!');
        
        // Push data to the data layer
        window.DataLayer = window.MDataLayer || {};
 
    window.DataLayer.page = {
        pageInfo: {
            pageName : document.title,
            pageURL : window.location.href,
            pagePath : window.location.pathname
        }
    };
    });
});
