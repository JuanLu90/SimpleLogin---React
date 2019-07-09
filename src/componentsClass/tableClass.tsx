import React from "react";
import { IUser } from "../interfaces";

//Definimos las propiedades

interface IProps {
  users: IUser[];
}

class TableClass extends React.Component<IProps> {
  render() {

    const styleTable = {
      margin: 'auto',
      fontSize: "0.55em"
    };

    return (
      <table style={styleTable}>
        <thead className="text-center">
          <tr>
            <th>Name:</th>
            <th>Email:</th>
          </tr>
        </thead>
        <tbody className="bg-dark text-light">
          {this.props.users.map(u => (
            <tr key={u._id}>
              <td className="border border-secondary p-2">{u.username}</td>
              <td className="border border-secondary p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableClass;
