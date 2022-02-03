import React, { useState, useEffect } from 'react'
import useFetchData from '../Hooks/useFetchData'
import {deleteUserRequest, updateUserRequest} from '../Services/UserServices'

import UserCard from './UserCard'

function sortList(list) {
    if (list) {
        return list.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
}



function UserList() {
    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users')
    

    const [userListState, setUserListState] = useState(data)

    useEffect(() => {
        setUserListState(sortList(data));
    }, [data])

    function userListHandler(id, type, user){

        if (type === 'delete') {
            deleteUserRequest(id).then(() => {
                setUserListState(userListState.filter(item => item.id !== user.id))
            }).catch(err => console.log(err))
            

        } else {
            updateUserRequest(user, id).then(() => {
                setUserListState(
                    userListState.map(item =>
                        item.id === id
                            ? user
                            : item
                    ))
            }).catch(err => console.log(err))
            
        }

    }


    if (error) {
        console.log(error)
    }




    return <>
        {loading && <div>Loading...</div>}
        {userListState && <div>{userListState.map(item => <UserCard key={item.id} user={item} updateUserList={(type, data) => userListHandler(item.id, type, data)} />)}</div>}
    </>

}

export default UserList;