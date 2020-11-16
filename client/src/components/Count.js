import React from 'react';

function Count(props) {

    return (
        <div style={{ margin: '40px', fontSize: '40pt', textAlign: 'center' }}>
            Count: {props.value}
        </div>
    );
}

export default Count;