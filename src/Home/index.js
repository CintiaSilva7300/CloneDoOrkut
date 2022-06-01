import { Avatar, Box } from '@mui/material';
import * as React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Img from './Img/IMGCINTIA.jpeg'


function Home() {
    // function navgate() {
    //     return (
    //         <Link to="/" />
    //     )
    // }

    return (
        <Container>

            <div style={{
            }}>
                <Box style={{ marginTop: 20, display: 'flex' }}>
                    <Avatar style={{
                        width: 200, height: 200,
                    }} alt="Remy Sharp" src={Img} />


                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Box>

                <div >
                    <p style={{ color: 'rebeccapurple', fontSize: 15, fontFamily: 'cursive' }}>Cintia Silva
                        <p> Front-End Developer</p>
                    </p>
                </div>
            </div>
        </Container>

    );
};
export default Home;
