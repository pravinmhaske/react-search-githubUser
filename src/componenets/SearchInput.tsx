import React, { useState } from 'react'

function SearchInput(props: { onSearchValChanged: (arg0: string) => void; }) {
    const [inputText, setInputText] = useState('');

    const onInputChange = (event: { target: { value: any; }; }) => {
        setInputText(event?.target?.value);
        console.log("event.target.value ", event.target.value);
        if (inputText.length > 1) {
            props.onSearchValChanged(inputText);
        }
    }
    return (
        <div>
            <input value={inputText} onChange={onInputChange} />
        </div>
    )
}

export default SearchInput
