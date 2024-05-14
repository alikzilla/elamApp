import Box from '@mui/material/Box';

const BaseContainer = ({ children, className }) => {
    return (
        <Box className={className}>
            {children}
        </Box>
    );
};

export default BaseContainer;
