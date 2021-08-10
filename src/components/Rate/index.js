import React, { useState } from 'react';
import { Wrapper } from './Rate.styles';

const Rate = ({ callback }) => {
    const [value, setValue] = useState(5);


    return (
        <div>
            <input
                type='range'
                min='1'
                max='10'
                value={value}
                onChange={e => setValue(e.currentTarget.value)} />
            {value}
            <Wrapper type="button" onClick={() => callback(value)}>
            <p>Rate</p>
            </Wrapper>
            
        </div>
    )
}
export default Rate;