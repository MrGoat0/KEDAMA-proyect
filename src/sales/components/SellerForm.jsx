import React,{useState,useEffect} from 'react';
import BDModal from "./BD-modal";
const SellerForm = (props) =>{
    const {handleRecord,sellerName, tableToShow,handleChangeSellerName} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const seller = "vendedor"
    return(
        <div className="d-flex flex-row justify-content-center">
        <div className="flex-column px-1">
                <div className="user-button input-group d-flex flex-column px-2">
                  <span>
                    {" "}
                    <strong>Vendedor</strong>{" "}
                  </span>
                  <div className="d-flex flex-row">
                    <input
                      id="seller-form"
                      type="text"
                      className="form-control"
                      aria-label="Text input with segmented dropdown button"
                      placeholder={sellerName}
                      onChange={handleChangeSellerName}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleShow}
                    >
                      BD
                    </button>
                    <BDModal
                      show={show}
                      onHide={handleClose}
                      type={seller}
                      tableToShow={tableToShow}
                      handleRecord={handleRecord}
                    />
                  </div>
                </div>
              </div>
              </div>
    )
}
export default SellerForm