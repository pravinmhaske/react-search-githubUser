import React from 'react'

function User(props: { user: { avatar_url: string | undefined; login: React.ReactNode; id: React.ReactNode } }) {
    return (
        // <div>
        <div className="card child">
            <img className="image" src={props?.user?.avatar_url} alt="Avatar" />
            <div className="container">
                <h4><b>{props?.user?.login}</b></h4>
                <p>{props?.user?.id}</p>
            </div>
        </div>
        // </div>
    )
}

export default User
