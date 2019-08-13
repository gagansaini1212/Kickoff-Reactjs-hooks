import { action, selector } from 'easy-peasy';

const schema = {
  isLoggedIn: {
    value: false,
    togggle: action((state, payload) => {
      state.value = payload;
    }),
  },
  todos: {
    items: [{ id: 1, name: 'milk' }, { id: 2, name: 'bread' }],
    addTodo: action((state, payload) => {
      state.items.push(payload);
    }),
    getById: selector([state => state.items], (stateResolvers, runtimeArgs) => {
      const [items] = stateResolvers;
      const [id] = runtimeArgs;
      return items.find(todo => todo.id === id);
    }),
  },
};

export default schema;
