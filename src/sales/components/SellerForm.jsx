import React, { useState } from 'react';
import BDModal from "./BD-modal";
const SellerForm = (props) => {
  const { sellerName, tableToShow, handleChangeSellerName, missingCell } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const seller = "vendedor"

  var missedCell = "";

  if (missingCell) {
    missedCell = "missing-cell";
  }

  return (
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
              className={"form-control" + missedCell}
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
              handleChangeSellerName={handleChangeSellerName}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SellerForm