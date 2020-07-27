import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

const STORAGE_KEY = 'todos-vuejs'
const state = {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}
const getters = {
    todos: state => state.todos
}
const mutations = {
    addTodo(state, text) {
        state.todos.push({
            text:text,
            done: false,
            click: false
        })
    },
    deleteTodo(state, index) {
        state.todos.splice(index, 1)
    },
    toggleTodo(state, index) {
        state.todos[index].done = !state.todos[index].done
    },
    buttonTodo(state, index) {
        state.todos[index].click = !state.todos[index].click
    },
    //modifyTodo(state, {value, index}) {
    //    state.todos[index].text = value
    //}
    modifyTodo(state, content) {
        state.todos[content.index].text = content.modifyText
    }
}
const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    plugins: [localStoragePlugin]
})