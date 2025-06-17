document.addEventListener('alpine.init', () => {
    Alpine.data('product', () => ({
        items: [
            {id: 1, name:'Product 1', img: 'img/product-1.jpg', price: 100, stock: 10, qty: 1},
            {id: 2, name:'Product 2', img: 'img/product-2.jpg', price: 200, stock: 5, qty: 1},
            {id: 3, name:'Product 3', img: 'img/product-3.jpg', price: 300, stock: 0, qty: 1},
            {id: 4, name:'Product 4', img: 'img/product-4.jpg', price: 400, stock: 2, qty: 1},
            {id: 5, name:'Product 5', img: 'img/product-5.jpg', price: 500, stock: 8, qty: 1},
        ]