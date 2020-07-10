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
        return key => 
        state.products.filter(element => {
            return element.key == key;
        })
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
        Vue.http.get("https://urun-islemleri-59b86.firebaseio.com/products.json")
            .then((response) => {
                // console.log(response)
                let data = response.body;
                for(let key in data){
                    data[key].key = key;
                    commit("updateProductList", data[key])
                }
            })
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
    sellProduct({ state, commit, dispatch }, payload){
        // vue resource işlemleri
        //kalan count u bulmak
        //pass by reference
        //pass by value kavramları araştır
        let product = state.products.filter(element => {
            //burada state deki products içinde element.key ile eşleşen payload.key i bulacak bunu product a atayacak, 
            return element.key == payload.key;
        })
        if(product){
            //kalanı bulalım
            let totalCount = product[0].count - payload.count; 
            Vue.http.patch("https://urun-islemleri-59b86.firebaseio.com/products/" + payload.key + ".json", { count : totalCount})
                .then((response) => {
                    // console.log(response)
                    product[0].count = totalCount;

                    let tradeResult = {
                        purchase : 0,
                        sale : product[0].price,
                        count : payload.count
                    }
                    dispatch("setTradeResult", tradeResult)
                    //ürün eklendkten sonra bize ürün listesini göstersin, bunu router ile yapıyoruz, 
                    router.replace("/")
                })
            }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}