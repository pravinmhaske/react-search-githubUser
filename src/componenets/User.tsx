import React from 'react'
import { IUser } from '../models/User'

function User(props: { user: IUser }) {
    return (
        <div className="card child">
            <img className="image" src={props?.user?.avatar_url} alt="Avatar" />
            <div className="container">
                <h4><b>{props?.user?.login}</b></h4>
                <p>{props?.user?.id}</p>
            </div>
        </div>
    )
}

export default User
