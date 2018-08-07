export default {
    namespace: 'detailed',
    state: [],
    reducers: {
      'delete'(state, { payload: name }) {
        debugger;
        return [{...state[0],name}];
      },
    },
  };
