console.clear();

const createPolicy = (name, amount) => {
  return ({
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }});
};

const deletePolicy = (name) => {
  return ({
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }});
};


const createClaim = (name, amount) => {
  return ({
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount
    }});
};

// Reducers

const claimsHistory = (curClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...curClaims, action.payload];
  }
  // We don't care about it!
  return curClaims;
};

const accounting = (bagOfMoney = 1000, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amount;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }

  // We don't care about it!
  return bagOfMoney;
};

const policies = (curPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...curPolicies, action.payload];
  } else if (action.type === 'DELETE_POLICY'){
    return curPolicies.filter(policy => policy.name !== action.payload.name);
  }
  // We don't care about it!
  return curPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDept = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDept);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('Alex', 120));
store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
