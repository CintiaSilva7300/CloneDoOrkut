/* eslint-disable react/jsx-no-undef */
import { ButtonBase, Input } from '@mui/material';
import React from 'react';
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Img from './Img/IMGCINTIA.jpeg';
import { FiX } from "react-icons/fi"; import { Link } from 'react-router-dom';
;

function Home() {
    return (
        <Container>
            <Navbar href="#home">
                <img
                    src="https://classic.exame.com/wp-content/uploads/2017/08/orkut.png?w=1024"
                    width="130"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <div style={{ padding: 30, margin: 10 }}>
                    <button style={{ marginLeft: 5, backgroundColor: '#7284A0', border: 0, borderRadius: 10 }}>Home</button>
                    <button style={{ marginLeft: 5, backgroundColor: '#7284A0', border: 0, borderRadius: 10 }}>Perfil</button>
                    <button style={{ marginLeft: 5, backgroundColor: '#7284A0', border: 0, borderRadius: 10 }}>Paginas de recados</button>
                    <button style={{ marginLeft: 5, backgroundColor: '#7284A0', border: 0, borderRadius: 10 }}>Comunidades</button>
                </div>

                <Link to="/">
                    <button style={{
                        color: 'red',
                        backgroundColor: '#7284A0',
                        border: 0,
                        borderRadius: 10,
                        width: 33,
                        height: 40,
                        textAlign: 'center',
                        marginLeft: '1600%'
                    }} type="submit">
                        X
                    </button>
                </Link>
            </Navbar>

            <Row style={{ border: 20 }}>
                <Col md={3}>
                    <Card style={{ width: '17rem', borderWidth: 10, borderColor: 'white' }}>
                        <Card.Img style={{ height: 320 }} variant="top" src={Img} />
                        <Card.Body>
                            <Card.Title>Cintia Silva</Card.Title>
                            <Card.Text>
                                <p>Feminina,
                                    Gosta de Animais e é
                                    Simpatica</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card style={{ width: '35rem' }}>
                        <Card.Body>
                            <Card.Title>No que você está pensando?</Card.Title>

                            <Input type='text'
                                style={{ width: '33rem' }}>
                            </Input>

                            <ButtonBase style={{
                                marginTop: 5,
                                backgroundColor: '#7284A0',
                                borderRadius: 10,
                                width: 110,
                                height: 30,
                            }}>Publicar
                            </ButtonBase>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Adicionar amigos</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default Home;
