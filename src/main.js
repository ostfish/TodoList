import Vue from 'vue'
import TodoList from './todoList'
import store from './store'
import axios from 'axios'
Vue.prototype.axios=axios

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(TodoList)
})
