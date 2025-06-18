document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        items: [
            {id: 1, name:'Kursi Roda', img:'kursiroda.jpg', price: 800000},
            {id: 2, name:'Termometer', img:'termometer.jpg', price: 50000},
            {id: 3, name:'Termogun', img:'termogun.jpg', price: 450000},
            {id: 4, name:'Digital Tensimeter', img:'digtensimeter.jpg', price: 800000},
            {id: 5, name:'Stetoskop', img:'stetoskop.jpg', price: 300000},
        ],
    }));
    

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            const cartItem = this.items.find((item) => item.id === newItem.id);
            if(!cartItem){ 
            this.items.push({...newItem, quantity: 0, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id){
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price*item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
    });
});


// konv rp
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};