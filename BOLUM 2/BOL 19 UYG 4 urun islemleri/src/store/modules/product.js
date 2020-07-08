import Vue from 'vue';
import { router } from '../../router'



const state = {
    products : [],
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}

const mutations = {
    updateProductList(state, product){
        state.products.push(product);
    }
}

const actions = {
    initApp({commit }){
        //  vue resource işlemleri... 

    },
    saveProduct({ commit, dispatch, state }, product){
        // vue resource işlemleri ...
        Vue.http.post("https://urun-islemleri-59b86.firebaseio.com/products.json", product)
            .then((response) => {
                //ürün listesinin güncellenmesi
                product.key = response.body.name
                commit("updateProductList", product)
                // console.log(response)
                // console.log(state.products)
                //alış satış bakiye bilgilerinin güncellenmesi
                let tradeResult = {
                    purchase : product.price,
                    sale : 0,
                    count : product.count
                }
                dispatch("setTradeResult", tradeResult)
                //ürün eklendkten sonra bize ürün listesini göstersin, bunu router ile yapıyoruz, 
                router.replace("/")
            })
    },
    sellProduct({ commit }, payload){
        // vue resource işlemleri
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}