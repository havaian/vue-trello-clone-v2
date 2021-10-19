const STORAGE_KEY = 'todo-storage';

const app = Vue.createApp({
    data() {
      return {
        newTodoText: '',
        todos: [],
        doings: [],
        dones: [],
      };
    },
    created() {
      this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    methods: {
      addTodo() {
        this.todos.push({
          id: this.todos.length,
          title: this.newTodoText,
          class: "todo",
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
        this.newTodoText = '';
      },
      removeTodo() {
        this.todos.splice(this.todos.indexOf(this), 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
      },
    },
});

app.component('todo-item', {
    template: 
        `<li>
        {{ title }}
        <button @click="removeTodo(todo)">❌</button>
        </li>`,
    props: ['title'],
});

app.mount('#todo-list');