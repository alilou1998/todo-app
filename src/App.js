import React, {Component} from 'react';
/* import FirstComponent from './component/learning/FistComponent';
import SecondComponent  from './component/learning/SecondComponent';
import ThirdComponent from './component/learning/ThirdComponent'; */
import TodoApp from './component/todo/TodoApp'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter/>*/}
                <TodoApp/>
            </div>

        );
    }
}


/* class LearningComponent extends Component{
    render(){
        return(
            <div className="LearningComponent">
                <h1>HelloWord </h1>
                <p>
                    <FirstComponent />
                    <SecondComponent />
                    <ThirdComponent/>
                </p>
            </div>
        )
    }
}
 */

