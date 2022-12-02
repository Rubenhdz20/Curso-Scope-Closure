

function moneyBox() {
    let saveCoins = 0; 
    return function addingMoney(coins) {
        saveCoins += coins; 
        console.log(`Moneybox: $${saveCoins}`);
    }
}

const savings = moneyBox();
savings(5);
savings(5);
savings(5);


function shoppingCart(){
    let cart = []
    return {
        addItems(item){
            cart.push(item);
        },
        getCartItem(){
            return cart
        },
        removeItem(){
            cart.pop()
        }
    };
}
const amazon = shoppingCart();
amazon.addItems("Mouse");
amazon.addItems("Keyboard");
amazon.addItems(`Display 24"`);
amazon.getCartItem() // ['Mouse', 'Keyboard', 'Display 24"']
amazon.removeItem()
amazon.getCartItem() // ['Mouse', 'Keyboard']