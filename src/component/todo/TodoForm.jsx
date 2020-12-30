import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import moment from "moment";
import TodoService from "../../api/todo/TodoService";
import Authentification from "./Authentification";
import {withRouter} from "react-router";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format("YYYY-MM-DD")
        }

    }

    componentDidMount() {



        let name = Authentification.getLoggedInUsername();
        let service = TodoService.gettododetailsfromId(this.state.id, name)
        service.then((response) => {
            this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
            })
        })
    }


    validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a description"
        } else if (values.targetDate.isValid) {
            errors.targetDate = "Enter a valid date"
        }
        return errors
    }

    submit = (values) => {
        let name = Authentification.getLoggedInUsername();
        if(this.props.match.params.id===-1){
            TodoService.addTodo(name, {
                description: values.description,
                targetDate: values.targetDate
            }).then(() => {
                this.props.history.push(`/todos`)
            })
        }else {
            TodoService.putTodo(this.state.id, name, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() => {
                this.props.history.push(`/todos`)
            })
        }

        //console.log(values)
    }

    render() {
        let {description, targetDate} = {
            description:this.state.description,
            targetDate:this.state.targetDate
        }
        return (
            <div className="TodoForm">
                <h1>Todo Form</h1>
                <Formik initialValues={{description: description || '', targetDate}}
                        onSubmit={this.submit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" placeholder="Enter your new Todo"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date"  name="targetDate"/>
                                </fieldset>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default withRouter(TodoForm);