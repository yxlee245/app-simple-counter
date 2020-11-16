import React from 'react';

function IncrementBtn (props) {
    
    return (
        <div
            style={{
                margin: '40px',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <button
                class="circular ui icon button blue"
                style={{
                    height: '200px',
                    width: '200px',
                    fontSize: '60pt'
                }}
                onClick={props.onClick}
            >
                <i class="icon plus"></i>
            </button>
        </div>

    );
    
}

export default IncrementBtn;