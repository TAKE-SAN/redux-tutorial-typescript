import * as React from 'react';

type propsType = {
  active: boolean,
  onClick: () => void,
  children: React.ReactNode
};

const Link: React.FC<propsType> = (props) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.active}
            style={{
                marginLeft: '4px'
            }}
        >
            {props.children}
        </button>
    );
};

export default Link;
