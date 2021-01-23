import React from 'react'
import User from './User'

function UserList(props: { users: any }) {



    return (
        <>
            <div className="flexContainer parent" >
                {
                    props?.users?.items?.map(function (user: any) {

                        return <User user={user}></User>
                    })
                }
            </div>
        </>
    )
}

export default UserList
