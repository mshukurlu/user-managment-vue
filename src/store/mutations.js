export const SET_USER = (state,{name,email}) => 
{
    state.users.push({
        id:state.users[state.users.length-1].id+1,
        name,
        email
    })
}

export const GET_USER = (state,userId) =>
{
  const user = state.users.find(user => {
          return user.id==userId
    })
    return user;
}

export const DELETE_USER = (state,userId) => 
{
    state.users = state.users.filter(user => {
            return user.id !== userId
    })
}