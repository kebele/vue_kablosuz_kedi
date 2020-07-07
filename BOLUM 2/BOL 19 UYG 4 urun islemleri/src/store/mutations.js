export const updateTradeResult = (state, payload) => {
    
    if(payload.count){
        state.purchase += parseFloat(payload.purchase) * parseInt(payload.count)
            //birini para old. için ondalıklıya çevirdik diğeri normal adet old için integer e çevirdik,
            //aynı şeyi sale içinde yapmalıyız
            state.sale += parseFloat(payload.sale) * parseInt(payload.count)
    }else{
        state.purchase += parseFloat(payload.purchase)
            state.sale += parseFloat(payload.sale)
    }    
    //ve balance ı da yapalım
    //yani satıştan alışı çıkaracağız
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase)
}