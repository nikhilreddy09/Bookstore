export function getProducts() {
    return {
        type: 'GET_PRODUCTS'
    }
}

export function addproduct(data) {
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export function deleteProduct(name) {
    return {
        type: 'DELETE_PRODUCT',
        payload: name
    }
}

export function updateProduct(index,data) {
    return {
        type: 'UPDATE_PRODUCT',
        payload: {index,data}
    }
}