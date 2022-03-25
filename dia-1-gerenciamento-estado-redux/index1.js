const Redux = require('redux');
const fazerLogin = (email) => ({
  type: "LOGIN",
  email}); 

const ESTADO_INICIAL = {
  login: false,
  email: "",
};
// action obrigatoriamente deve ter uma chave type
const reducer = (state = ESTADO_INICIAL, action) => {
  if (action.type === "LOGIN") {
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    } else {
      return state;
    }
};
// estou despachando uma atualização por um action chamado fazerLogin. Só cria uma vez.
const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

store.subscribe(() => {
  const estadoGlobal = store.getState();
})
console.log(store.getState() );

// { login: true, email: 'alguem@email.com' }



