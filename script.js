const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Show the alert to the user
        alert('Product added to cart!');
        
        // Push data to the data layer
        window.MyDataLayer = window.MyDataLayer || {};
 
    window.MyDataLayer.page = {
        pageInfo: {
            pageName : document.title,
            pageURL : window.location.href,
            pagePath : window.location.pathname
        }
    };
    });
});
