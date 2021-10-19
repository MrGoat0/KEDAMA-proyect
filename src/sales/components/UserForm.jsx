import BDModal from "./BD-modal";
import React,{useState,useEffect} from 'react';
import api from "../../api.js";
const UserForm =(props) => {
    const {changeUserID,changeUserName,userName} = props;
    const [users,setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = "usuario";

    useEffect(()=>{
      async function fetchData(){
        const response = await api.users.list();
        setUsers(response);
      }
      fetchData();
    },[])

    return (
      <div>
        <div className="p-2">
          <h3>Información del usuario</h3>
        </div>
        <div className="d-flex flex-row justify-content-between p-1 ">
          <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
            <span>
              {" "}
              <strong>Usuario</strong>{" "}
            </span>
            <div className="d-flex flex-row">
              <input
                id="user-form"
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                placeholder={userName}
                onChange={changeUserName}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleShow}
              >
                BD
              </button>
              <BDModal show={show} onHide={handleClose} type={user} users={users} handleRecord={props.handleRecord}/>
            </div>
          </div>
          <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
            <span>
              {" "}
              <strong> ID </strong>{" "}
            </span>
            <div className="d-flex flex-row">
              <input
                id="ID-user-form"
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                placeholder="Identificador"
                onChange={changeUserID}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
export default UserForm