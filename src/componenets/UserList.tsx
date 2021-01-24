import React from 'react'
import { IUserRes } from '../models/User'
import User from './User'

function UserList(props: { users: IUserRes }) {



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
