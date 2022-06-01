import { ButtonBase } from '@mui/material';
import React from 'react';
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Img from './Img/IMGCINTIA.jpeg';

function Home() {
    // function navgate() {
    //     return (
    //         <Link to="/" />
    //     )
    // }

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
                <ButtonBase style={{
                    margin: 30,
                    marginTop: 40,
                    marginLeft: 45,
                    width: 70,
                    height: 35,
                    backgroundColor: '#7284A0',
                    borderRadius: 10
                }}>Home</ButtonBase>

                <ButtonBase style={{
                    margin: 30,
                    marginTop: 40,
                    marginLeft: 5,
                    width: 70,
                    height: 35,
                    backgroundColor: '#7284A0',
                    borderRadius: 10
                }}>Perfil</ButtonBase>

                <ButtonBase style={{
                    margin: 30,
                    marginTop: 40,
                    marginLeft: 5,
                    width: 160,
                    height: 35,
                    backgroundColor: '#7284A0',
                    borderRadius: 10
                }}>Paginas de recados</ButtonBase>

                <ButtonBase style={{
                    margin: 30,
                    marginTop: 40,
                    marginLeft: 5,
                    width: 110,
                    height: 35,
                    backgroundColor: '#7284A0',
                    borderRadius: 10
                }}>Comunidades</ButtonBase>
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
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
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
