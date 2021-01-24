import React from 'react'
import { IRepo } from '../models/repo'

function Repo(props: { repo: IRepo }) {
    return (
        <div className="card child">
            <div className="container">
                <h4><b>{props?.repo.description}</b></h4>
                <p>{props?.repo.full_name} </p>
            </div>
        </div>
    )
}

export default Repo
