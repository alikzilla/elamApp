import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BaseAccordion = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography>{item.header}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.body}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
};

export default BaseAccordion;
