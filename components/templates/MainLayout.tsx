import React, { StatelessComponent } from 'react';
import NavigationBar from '../organisms/NavigationBar';

const Layout: StatelessComponent = ({
    children,
}) => {
    return (
        <React.Fragment>
            <NavigationBar />
            {children}
        </React.Fragment>
    )
}

export default Layout