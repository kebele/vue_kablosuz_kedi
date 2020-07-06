export const updateTradeResult = (state, payload) => {
    //burayı daha sonra gireceğiz
    state.purchase += parseFloat(payload.purchase) * parseInt(payload.count)
    //birini para old. için ondalıklıya çevirdik diğeri normal adet old için integer e çevirdik,
    //aynı şeyi sale içinde yapmalıyız
    state.sale += parseFloat(payload.purchase) * parseInt(payload.count)
    //ve balance ı da yapalım
    //yani satıştan alışı çıkaracağız
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase)
}