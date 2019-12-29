const StoreItem = (newItem) => {
    return {
        type: 'STORE_ITEM',
        data: newItem
    }
}

module.exports = { StoreItem }