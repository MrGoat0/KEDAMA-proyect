/* eslint-disable no-sequences */
import BDModal from "./BD-modal";
import React,{useState} from 'react';


const ProductForm = (props) =>{
    const {changeProduct, changeMount, productShow, tableToShow,missingCell} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const product = "producto";

    var missedCell = "";

    if(missingCell){
      missedCell = "missing-cell";
    }

    return (
        <div>
            <div className="p-1">
              <h3>Información del producto y venta</h3>
            </div>
            <div className="d-flex flex-row justify-content-between p-1">
            <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                  <span>
                    {" "}
                    <strong>Producto</strong>{" "}
                  </span>
                  <div className="d-flex flex-row">
                    <input
                      id="product-form"
                      type="text"
                      className={ "form-control", missedCell}
                      aria-label="Text input with segmented dropdown button"
                      placeholder={productShow}
                      onChange={changeProduct}
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
                      type={product}
                      tableToShow={tableToShow}
                      changeProduct={changeProduct}
                    />
                  </div>
            </div>
                <div className="d-flex flex-column px-5">
                  <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                    <span>
                      {" "}
                      <strong> Cantidad </strong>{" "}
                    </span>
                    <div className="d-flex flex-row">
                      <input
                        id = "product-mount-form"
                        type="number"
                        className={ "form-control", missedCell}
                        aria-label="Number input with segmented dropdown button"
                        placeholder="#"
                        onChange={changeMount}
                      />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default ProductForm;