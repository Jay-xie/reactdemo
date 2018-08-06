export default {
    namespace: 'products',
    state: [],
    reducers: {
      'delete'(state, { payload: id }) {
        debugger;
        return state.filter(item => item.id !== id);
      },
    },
  };
  