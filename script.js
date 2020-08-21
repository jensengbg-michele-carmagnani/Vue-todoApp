// components
Vue.component("todo-item", {
  props: ["todo"],

  template: `
  <li v-bind:class="{done : todo.done}">
          <input type="checkbox" v-model="todo.done" />
          <span v-on:click.alt="removeTodo()">{{todo.text}}</span>
  </li>
  `,
  methods: {
    removeTodo() {
      let index = this.$vnode.key;
      this.$parent.todos.splice(index, 1);
      console.log(this);
    },
  },
});

// inti Vue
Vue.component("new-todo", {
  template: `
  <footer>
  <input type="text" id="todo" v-model="text" v-on:keyup.enter="addTodo" />
  <button v-on:click.enter="addTodo">Add Item</button>
  </footer>
  `,
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addTodo() {
      if (this.text.length < 1) {
        alert("Du kan du inte lägga till en tom Todo.");
      } else {
        let todo = { text: this.text, done: false };
        this.$parent.todos.push(todo);
        this.text = "";
      }
    },
  },
});

let app = new Vue({
  el: "#app",
  //Model/data/state
  data: {
    todos: [],
  },
});
