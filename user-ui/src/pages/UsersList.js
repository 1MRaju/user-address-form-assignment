import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useId } from "../contexts/idContext";


const UsersList = () => {
  const navigate = useNavigate();
  const { updateId } = useId();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL1}/users/all-users`
      );
      setUsers(response.data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (userId) => {
    await userId;
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASEURL1}/users/delete-user/${userId}`
      );

      console.log(!response);

      toast.success("User deleted successfully", {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        theme: "colored",
      });
    }
    getUsers();
  };

  const handleEdit = (userId) => {
    console.log(userId);
    updateId(userId);
    navigate('/update-user-list')
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="main__container">
        <div className="userList_header">
          <h1>List Of Users</h1>
          <button onClick={() => navigate("/")}>Home</button>
        </div>

        <div className="users__container">
          <ul className="userList">
            {users.map((user) => (
              <li key={user._id}>
                <div className="user__container">
                  <table>
                    <thead>
                      <tr>
                        <th colSpan="2">User Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="userData">Name:</td>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <td className="userData">Email:</td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td className="userData">Phone:</td>
                        <td>{user.phone}</td>
                      </tr>
                      <tr>
                        <td className="userData">Age:</td>
                        <td>{user.age}</td>
                      </tr>
                      <tr>
                        <td className="userData">Sex:</td>
                        <td>{user.sex}</td>
                      </tr>
                      <tr>
                        <td className="userData">Address:</td>
                        <td>{user.address}</td>
                      </tr>
                      <tr>
                        <td className="userData">Time:</td>
                        <td>{new Date(user.createdAt).toLocaleString('en-GB')}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <button
                            id="edit"
                            onClick={() => handleEdit(user._id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            id="delete"
                            onClick={() => handleDelete(user._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UsersList;
