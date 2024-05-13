import Accordion from 'react-bootstrap/Accordion';

const BaseAccordion = ({ items }) => {
    return (
        <Accordion defaultActiveKey={-1}>
            {items.map((item, index) => (
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default BaseAccordion;
