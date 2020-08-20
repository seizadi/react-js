const usersReducer = (users = [], action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return action.payload;

    case 'FETCH_USER':
      return [...users, action.payload];

    default:
      return users;
  }
};

export default usersReducer;
