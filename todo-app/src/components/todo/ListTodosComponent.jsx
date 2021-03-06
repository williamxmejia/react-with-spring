import React, { Component } from "react";
import TodoDataService from "../../api/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          
        ],
      };
    }

    componentDidMount(){
      let username = AuthenticationService.getLoggedInUsername;
      TodoDataService.retrieveAllTodos(username).then(response => {
        // console.log(response);
        this.setState({todos :response.data })
      })
    }
  
    render() {
      return (
        <div>
          <h1>List Todos</h1>
  
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  {/* <th>id</th> */}
                  <th>description</th>
                  <th>targetDate</th>
                  <th>is Completed?</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((todo) => (
                  <tr>
                    {/* <td>{todo.id}</td> */}
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  export default ListTodosComponent;