import React, { useState } from 'react'

function SearchType(props: { onSearchTypeChanged: (arg0: any) => void; }) {

    const [type, setType] = useState('repo');

    const handleChange = (event: { target: { value: any; }; }) => {
        setType(event?.target?.value);
        props.onSearchTypeChanged(event?.target?.value);

    }

    return (
        <div>
            <select value={type} onChange={handleChange}>
                <option value="user" >User</option>
                <option value="repo">Repo</option>
            </select>

        </div >
    )
}

export default SearchType

