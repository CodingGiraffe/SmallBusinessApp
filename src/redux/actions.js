export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const removeCar = (index) => {
export const removeListing = (index) => {
    return {
        type: 'REMOVE_CAR',
        type: 'REMOVE_LISTING',
        value: index
    }
} 