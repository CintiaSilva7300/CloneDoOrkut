import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { flexbox } from '@mui/system';
import { Link } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';

document.body.style.backgroundColor = '#D4DDED';
function Login() {
    return (
        <div style={{ padding: 0 }}>
            <Stack sx={{ width: '100%', padding: 1 }} spacing={2}>
                <Alert severity="warning">Aviso: O orkut.br não tem vínculo com o Google.</Alert>
            </Stack>

            <Container>
                <Row>
                    <Col sm={8}>
                        <Card style={{ width: 750, height: 400 }}>

                            <Card.Body>
                                <Card.Img style={{ marginTop: '15%', marginLeft: 250, width: 232, height: 76 }} src="https://www.orkut.br.com/assets/img/orkut_logo.png" />
                                <Card.Text>
                                    <div style={{ marginLeft: 120, marginTop: 10, fontSize: 15, fontFamily: 'ariel', textAlign: 'center', width: 500 }}>
                                        <p><b> Conecte-se </b>aos seus amigos e familiares usando recados e mensagens instantâneas
                                            <b> Conheça </b>novas pessoas através de amigos de seus amigos e comunidades
                                            <b> Compartilhe </b>seus vídeos, fotos e paixôes em um só lugar</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={4}>
                        <Card style={{ width: 400, height: 295 }}>

                            <Card.Body>
                                <p style={{ textAlign: 'center' }}>
                                    Acesse o <strong>orkut.br</strong> com a sua conta
                                </p>
                                <Form style={{ fontSize: 15 }}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        Email address
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        Password
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Check type="checkbox" label="Salvar as minhas informações neste computador." />
                                    </Form.Group>
                                    <Link to="/home">
                                        <button style={{ alignItems: 'flex-end' }} type="submit">
                                            Submit
                                        </button>
                                    </Link>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: 400, height: 100, marginTop: 5, borderWidth: 5, borderColor: 'white' }}>
                            <p style={{ textAlign: 'center' }}><strong>Ainda não é membro?</strong></p>
                            <Link to="/home" style={{ textAlign: 'center' }} >Entrar já</Link>
                        </Card>
                    </Col>

                    <Col md={12}>
                        <Card style={{ width: 1158, height: 55, borderWidth: 5, marginTop: 5, alignItems: 'center' }}>
                            <p style={{ padding: 5 }}>
                                <FaRegCopyright />  2022- Criado por Cintia Silva

                                <Link style={{ padding: 5 }} to="https://github.com/CintiaSilva7300">
                                    Meu Github
                                </Link>
                            </p>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;