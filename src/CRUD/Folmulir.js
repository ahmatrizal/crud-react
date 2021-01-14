import React from 'react'
import { Col, Row, Form, Button} from 'react-bootstrap'

const Folmulir = ({ nama, harga, deskripsi, handleChange, handleSubmit, id}) => {
    return (
        <div className='mt-5'>
                <Row>
                    <Col>
                        <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="Nama">
                                <Form.Label>Nama Makanan</Form.Label>
                                <Form.Control type="text" name='nama' value={nama} onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group controlId="Harga">
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="number" name='harga' value={harga} onChange={(e) => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group controlId="Deskripsi">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control as="textarea" name='deskripsi'value={deskripsi} onChange={(e) => handleChange(e)} rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                    </Col>
                </Row>
            
        </div>
    )
}

export default Folmulir
