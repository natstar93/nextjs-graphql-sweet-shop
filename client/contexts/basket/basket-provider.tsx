import {
  createContext, ReactElement, useContext, useMemo, useReducer,
} from 'react';
import basketReducer, { InitialStateType } from './basket-reducer';

const initialState = {
  basketCount: 0,
};

type ContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<unknown>
}

const BasketContext = createContext<ContextType>({
  state: initialState,
  dispatch: undefined,
});

function BasketProvider({ children }: {children: ReactElement}) {
  const [state, dispatch] = useReducer(basketReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
}

export { BasketProvider, useBasket };
