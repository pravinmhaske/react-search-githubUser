import React, { useState } from 'react'

function SearchType(props: { onSearchTypeChanged: (arg0: any) => void; }) {

    const [type, setType] = useState('user');

    const handleChange = (event: { target: { value: any; }; }) => {
        console.log(" event?.target?.value  ===>>>", event?.target?.value);
        setType(event?.target?.value);
        props.onSearchTypeChanged(event?.target?.value);

    }

    return (
        <div>
            <select className="_select" value={type} onChange={handleChange}>
                <option value="user" >User</option>
                <option value="repo">Repo</option>
            </select>

        </div>
    )
}

export default SearchType
