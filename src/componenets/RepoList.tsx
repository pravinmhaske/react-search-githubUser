import React from 'react'
import { IRepoRes } from '../models/repo'
import Repo from './Repo'

function RepoList(props: { repos: IRepoRes }) {
    return (
        <>
            <div className="flexContainer parent" >
                {
                    props?.repos?.items?.map(function (repo: any) {

                        return <Repo repo={repo}></Repo>
                    })
                }
            </div>
        </>
    )
}

export default RepoList
