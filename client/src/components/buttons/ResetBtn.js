import React from 'react';

function ResetBtn (props) {    
    return (
        <div
            style={{
                margin: '40px',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <button
                class="ui orange button"
                style={{
                    width: '200px',
                    height:'50px',
                    fontSize: '15pt'
                }}
                onClick={props.onClick}
            ><b>Reset Button</b></button>
        </div>
    );
}

export default ResetBtn;