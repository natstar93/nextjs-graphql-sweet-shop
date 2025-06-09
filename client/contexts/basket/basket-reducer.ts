export type InitialStateType = {
  basketCount: number;
}

export enum BasketActions {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

function basketReducer(
  state: InitialStateType,
  action: { type: BasketActions; value: number },
) {
  switch (action.type) {
  case BasketActions.ADD_PRODUCT:
    return {
      basketCount: state.basketCount + action.value,
    };
  default:
    return state;
  }
}

export default basketReducer;
