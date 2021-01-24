import React, { useState, memo } from 'react';
import _ from "lodash";

interface ISearchInputProps { onSearchValChanged: (arg0: any) => void; }


function SearchInput(props: ISearchInputProps) {
    const [inputText, setInputText] = useState('');

    const delayedQuery = _.debounce(q => props.onSearchValChanged(q), 500);

    const onInputChange = (event: { target: { value: any; }; }) => {

        setInputText(event?.target?.value);
        console.log("event.target.value ", event.target.value);
        if (event?.target?.value.length > 2) {
            // props.onSearchValChanged(event?.target?.value);
            delayedQuery(event?.target?.value);
        }
    }
    return (
        <input value={inputText} style={{ width: '95%' }} placeholder="Start typing to search..." onChange={onInputChange} />
    )
}

export default memo(SearchInput)
