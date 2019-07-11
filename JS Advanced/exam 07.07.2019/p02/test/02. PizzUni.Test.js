const PizzUni = require('../pizzUni');
const {assert} = require('chai');


describe('PizzUni', function () {

    let pizzUni;

    beforeEach(function () {
        pizzUni = new PizzUni();
    });

    describe('registerUser', function () {
        it('should if user exist', function () {
            pizzUni.registerUser('bob@marley.com');

            assert.throw(()=> pizzUni.registerUser('bob@marley.com'), 'This email address (bob@marley.com) is already being used!')
        });

        it('should register pass', function () {
            assert.deepEqual(pizzUni.registerUser('bob@marley.com'), { email: 'bob@marley.com', orderHistory: [] })
        });
        it('should pass', function () {
            assert.deepEqual(pizzUni, {
                    registeredUsers: [],
                    availableProducts:
                        { pizzas:
                                [ 'Italian Style', 'Barbeque Classic', 'Classic Margherita' ],
                            drinks: [ 'Coca-Cola', 'Fanta', 'Water' ] },
                    orders: [] })
        });
    });


    describe('makeAnOrder', function () {
        it('should if user dont exit', function () {
            assert.throw(() => pizzUni.makeAnOrder('ba', 'piza', 'bo'), 'You must be registered to make orders!');
        });

        it('should no pizza order', function () {
            pizzUni.registerUser('bob@marley.com');

            assert.throw(() => pizzUni.makeAnOrder('bob@marley.com', "da", "da", 'You must order at least 1 Pizza to finish the order.'))
        });


        it('should ', function () {
            pizzUni.registerUser('bsob@marley.com')
            pizzUni.registerUser('bob@marley.com')
            pizzUni.makeAnOrder('bsob@marley.com', 'Classic Margherita', 'Fanta');
            assert.equal(pizzUni.makeAnOrder('bob@marley.com', 'Classic Margherita', 'Fanta'), 1)
            // assert.equal(pizzUni.makeAnOrder('bob@marley.com', 'Classic Margherita', 'Fanta'), { orderedPizza: 'Italian Style',
            //     orderedDrink: 'Fanta',
            //     email: 'bob@marley.com',
            //     status: 'pending' } );

        });


        it('should completeOrder', function () {
            pizzUni.registerUser('a@o.bg');
            pizzUni.makeAnOrder('a@o.bg', 'Italian Style', 'Fanta');

            assert.equal(pizzUni.completeOrder(),   { email: 'bob@marley.com', orderHistory: 'Italian Style',
                orderedDrink: 'Fanta',
                email: 'a@o.bg',
                status: 'completed' })
        })

        it('should doesTheUserExist', function () {
            pizzUni.registerUser('bob@marley.com');
            assert.deepEqual(pizzUni.doesTheUserExist('bob@marley.com'), { email: 'bob@marley.com', orderHistory: [] })
        });


    })




});



// describe('detailsAboutMyOrder', function () {
//     it('should if pass', function () {
//
//         pizzUni.registerUser('bob@marley.com');
//         pizzUni.makeAnOrder('bob@marley.com', 'Classic Margherita', 'Fanta');
//         pizzUni.completeOrder();
//         assert.equal(pizzUni.detailsAboutMyOrder(1), 'Status of your order: 1 pending');
//     });
// })


// assert.equal(pizzUni.registerUser('bob@marley.com'),
//     {PizzUni: {
//     registeredUsers: [ { email: 'bob@marley.com', orderHistory: [] } ],
//         availableProducts:
//     { pizzas:
//         [ 'Italian Style', 'Barbeque Classic', 'Classic Margherita' ],
//             drinks: [ 'Coca-Cola', 'Fanta', 'Water' ] },
//     orders: [] }}
//     )