
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class Check extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            value2: '',
            isactive: '',
            isactive_p: '',
        };

    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleReset = () => {
        this.setState({
            isactive: '',
            isactive_p: '',
            value: '',
            value2: '',
        })
    }

    handleChange2 = (event) => {

        this.setState({ value2: event.target.value });

    }

    handleValidate = () => {
        console.log("adill")
        // alert('A name was submitted: ' + this.state.value);
        if (this.state.value === '') {

            this.setState({ isactive: true }
                //console.log(this.isactive)
            )

        }
        else if (this.state.value2 === '') {
            this.setState({ isactive_p: true })

        }
        else {
            this.setState({ isactive_p: false })
            this.setState({ isactive: false })
        }
    }
    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>

                        <tr className={this.state.isactive ? "first" : "Second"}>
                            <td> Enter Username:</td>
                            <td>
                                <input type="username" value={this.state.value} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr className={this.state.isactive_p ? "first" : "Second"}>
                            <td>   Enter Password:</td>
                            <td> <input type="password" value={this.state.value2} onChange={this.handleChange2} /></td>

                        </tr>
                    </tbody>
                </table>


                <input type="button" value="validate" onClick={this.handleValidate} />
                <input type="reset" value="reset" onClick={this.handleReset} />
            </React.Fragment>
        );

    }
}
export default Check;