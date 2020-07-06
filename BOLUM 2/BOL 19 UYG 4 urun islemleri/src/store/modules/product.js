import Vue from 'vue';


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
    saveProduct({ commit, state }, product){
        // vue resource işlemleri ...
        Vue.http.post("https://urun-islemleri-59b86.firebaseio.com/products.json", product)
            .then((response) => {
                //ürün listesinin güncellenmesi
                product.key = response.body.name
                commit("updateProductList", product)
                // console.log(response)
                // console.log(state.products)
                //
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