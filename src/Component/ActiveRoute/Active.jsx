import React from 'react';

const Active = ({children}) => {
    return (
        <div>
            
            <NavLink
                    to={children}className={({ isActive}) =>
                    
                    isActive ? "active": ""}
            >
                {children}

            </NavLink>

        </div>
    );
};

export default Active;