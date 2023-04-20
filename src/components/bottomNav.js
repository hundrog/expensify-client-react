import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNav(props) {
    const [value, setValue] = React.useState(props.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                href='expenses'
                label="Expenses"
                value="expenses"
                icon={<CurrencyExchangeIcon />}
            />
            <BottomNavigationAction
                label="Analyst"
                value="analyst"
                icon={<TimelineIcon />}
            />
            <BottomNavigationAction
                label="Profile"
                value="profile"
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    );
}