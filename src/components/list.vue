<template>
  <li class="todo-line">
      <input class="checkbox" type="checkbox" @click="itemCheck(item)">
      <p class="item-label" v-bind:class="{ 'line-through': checked }">{{ index + 1 }} . {{ todoItem.text  }} </p>
      <p class="item-status" v-if="todoItem.done">√已完成</p>
      <p class="item-delete" @click="deleteClick">删除</p><br>

      <button class="item-modify" @click="buttonCheck(item)">修改</button>
      <input class="modify-input" @keyup.enter="modifyTodo()" v-model="modifyText" placeholder="修改内容"  v-show="todoItem.click"/> 
      <button class="item-modify" @click="modifyTodo()"  v-show="todoItem.click">确认</button>

  </li>
</template>

<script>

export default {
  props: {
    todoItem: Object,
    index: Number
  },
  data () {
    return {
      checked: false,
      modifyText: null
    }
  },
  methods: {
    itemCheck () {
      this.$store.commit('toggleTodo', this.index)
    },
    buttonCheck(){
      this.$store.commit('buttonTodo', this.index)
    },
    deleteClick () {
      this.$store.commit('deleteTodo', this.index)
    },

    modifyTodo(index,value){
      this.$store.commit('modifyTodo',{modifyText:this.modifyText, index:this.index})
      this.modifyText=''
      this.$store.commit('buttonTodo', this.index)
    },
    onConfirm() {
      this.$emit('change', this.modifyText);
      this.$store.commit('buttonTodo', this.index)
    }
  }
}
</script>


<style scoped>
.todo-line {
  height: 30px;
}
.item-status {
  display: inline;
  background: rgb(0, 221, 0);
  color: white;
  padding: 0 5px;
  font-size: 12px;
}
.item-delete {
  display: none;
  text-decoration: underline;
  font-size: 12px;
  color: red;
  cursor: pointer;
}
.item-label {
  display: inline;
}
.line-through {
  text-decoration: line-through;
}
.item-modify {
  height:23px;
  font-family:"黑体";
  color:rgb(0, 0, 0);
  background-color:rgb(223, 223, 223);
}
.modify-input {
  width: 200px;
  height: 23px;
  padding: 0 5px;
  opacity: 0.6;
}
.checkbox {
  width: 15px;
  height: 15px;
}
h3:hover .item-delete {
  display: inline;
}
</style>
