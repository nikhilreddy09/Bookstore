const initialState  = [
    {
        name: 'Book1',
        price: 50,
        category: 'fiction',
        description: 'it is book1'
    },
    {
        name: 'Book2',
        price: 150,
        category: 'Comedy',
        description: 'it is book2'
    },
    {
        name: 'Book3',
        price: 250,
        category: 'Romance',
        description: 'it is book3'
    }
]

function rootReducer(state = initialState,action) {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return [
                ...state,
            ]
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_PRODUCT':
            return state.filter((book) => book.name !== action.payload)
        case 'UPDATE_PRODUCT':
            return state.map((item,index) => index === action.payload.index ? action.payload.data: item)
        default: return state
    }
}

export default rootReducer