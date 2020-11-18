import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '../i18n'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: 'es'
    },
    mutations: {
        setLanguage(state,value){
            state.language = value
            i18n.locale = value
        }
    }
})
