import Vue from 'vue'

export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult)

    let tradeData = {
        purchase : state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://urun-islemleri-59b86.firebaseio.com/trade-result.json", tradeData)
        .then((response) => {
            console.log(response)
        })
}

export const getTradeResult = ({ commit }) => {
    // firebase bağlanacak ve oradaki verileri alıp state i güncelleyeceğiz, state i güncelleyen şey mutations, o zaman şu anda actions dayız mutations ı buradan çağırmalıyız, bunun için bu func. commit i parametre olarak alacağız
}