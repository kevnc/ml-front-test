
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1 className="text-center">Kevin Cabrera</h1>
                    </Col>
                    <Col md={12}>
                    Que onda
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default App;