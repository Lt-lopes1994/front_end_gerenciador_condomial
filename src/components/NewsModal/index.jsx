import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function NewsModal(props) {
    console.log(props.news)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title as={'h1'} id="contained-modal-title-vcenter" className='news-modal-title'>
                    {props.news.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    textAlign: 'justify',
                    padding: 30
                }}
            >
                <p>
                    {props.news.content}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={props.onHide}
                    className='btnSend'
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}