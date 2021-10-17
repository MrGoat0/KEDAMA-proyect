import BDModal from "./BD-modal";
import React,{useState} from 'react';
const UserForm =(props) => {
    const {changeUserID,changeUserName,users} = props;
    const [show, setShow] = useState(false);
    // const [pressed,setPress] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = "usuario";

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
                placeholder="Nombre"
                onChange={changeUserName}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleShow}
              >
                BD
              </button>
              <BDModal show={show} onHide={handleClose} type={user} users={users}/>
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