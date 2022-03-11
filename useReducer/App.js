import React from "react";
import App from "../useReducer/App";

const actions = {
    SUBTRAIR: 'SUBTRAIR',
    SOMAR: 'SOMAR',
    DOBRAR: 'DOBRO',
    METADE: 'METADE',
    ZERAR: 'ZERAR'
}

function reduce(state, action) {

    switch (action.type) {
        case actions.SUBTRAIR:
            //retorna todo o objeto com o spread operator, 
            return { ...state, count: state.count - 1 };

        case actions.SOMAR:
            return { ...state, count: state.count + 1 };

        case actions.DOBRO:
            return { ...state, count: state.count * 2 };

        case actions.METADE:
            return { ...state, count: state.count / 2 };

        case actions.ZERAR:
            return { ...state, count: state.count = 0 };

        default:
            return state;
    }
}
const initialValue = { count: 0 };
function App() {

    const [state, dispatch] = React.useReducer(reduce, initialValue);

    return (<>

        <h1>Contador</h1>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: actions.SUBTRAIR })}>-</button>
        <button onClick={() => dispatch({ type: actions.SOMAR })}>+</button>
        <button onClick={() => dispatch({ type: actions.DOBRO })}>dobro</button>
        <button onClick={() => dispatch({ type: actions.METADE })}>metade</button>
        <button onClick={() => dispatch({ type: actions.ZERAR })}>zerar</button>
    </>
    );


}

export default App;