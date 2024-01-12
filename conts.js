var Print = {
    items: {
        dish1: {
            name: 'BEEF SALAD',
            price: '15',
            size: 'Small',
            dough: ['Roasted', 'Spice'],
            toppings: {
                name: 'TOPPINGS',
                toppings: ['Cheese', 'Onion', 'Tomatoes', 'Pepper'],
            },
            freeToppings: [],
            remove: {
                name: "REMOVE",
                toppings: []
            },
        },
        dish2: {
            name: 'FANTA',
            price: '10',
            size: '0.5L',
            dough: [],
            toppings: {
                name: '',
                toppings: [],
            },
            freeToppings: [],
            remove: {
                name: "REMOVE",
                toppings: []
            },
        },
        dish3: {
            name: 'BEEF SALAD',
            price: '15',
            size: 'Small',
            dough: ['Roasted', 'Spice'],
            toppings: {
                name: 'FREE TOPPINGS',
                toppings: ['Parsley', 'Onion', 'Cucumber'],
            },
            freeToppings: ['Cheese', 'Pepper', 'Parsley'],
            remove: {
                name: "REMOVE",
                toppings: ['Tomatoes', 'Cucumber']
            },
        },
    },
    bundle: {
        name: 'BUSINESS LUNCH',
        price: '45',
        dishes: {
            dish1: {
                name: 'BEEF SALAD',
                price: '15',
                size: 'Small',
                dough: ['Roasted', 'Spice'],
                toppings: {
                    name: 'FREE TOPPINGS',
                    toppings: ['Parsley', 'Onion', 'Cucumber'],
                },
                freeToppings: ['Cheese', 'Pepper', 'Parsley'],
                remove: {
                    name: "REMOVE",
                    toppings: ['Tomatoes', 'Cucumber']
                },
            },
            dish2: {
                name: 'Pepsi',
                price: '12',
                size: '0.5L',
                dough: [],
                toppings: {
                    name: '',
                    toppings: [],
                },
                freeToppings: [],
                remove: {
                    name: "REMOVE",
                    toppings: []
                },
            },
            dish3: {
                name: 'SALMON SALAD',
                price: '15',
                size: '350g',
                dough: ['Roasted'],
                toppings: {
                    name: '',
                    toppings: [],
                },
                freeToppings: [],
                remove: {
                    name: "REMOVE",
                    toppings: []
                },
            },
        },
    },
};
