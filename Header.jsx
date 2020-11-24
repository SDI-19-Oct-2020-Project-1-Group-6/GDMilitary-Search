import React from 'react';

const Header = (props) => {
    return (
        <div className="ui sizer vertical segment">
            <div className="ui huge header">IRON CURTAIN</div>
            <div className="ui small header"><span className="link" onClick={props.onSearch}>Search</span></div>
        </div>
    );
}

export default Header;