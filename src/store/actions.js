export const addUserToList = ({commit},{name,email}) => {

        console.log('ad '+name);
        commit('SET_USER',{name,email});
}
export const deleteUserById = ({commit},userId) => 
{
        commit('DELETE_USER',userId)
}