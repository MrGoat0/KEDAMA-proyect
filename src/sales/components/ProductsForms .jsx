import BDModal from "./BD-modal";
import React,{useState,useEffect} from 'react';
import api from "../../api.js"


const ProductForm = (props) =>{
    const {changeProduct, changeMount,setSales, handleRecord} = props;

    const [show, setShow] = useState(false);
    const [productst,setProduct] = useState([]);
    // const [pressed,setPress] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const product = "producto";


    useEffect(()=>{
      async function fetchData(){
        const response = await api.products.list();
        setProduct(response);
      }
      fetchData();
    },[])


    return (
        <div>
            <div className="p-2">
              <h3>Información del producto y venta</h3>
            </div>
            <div className="d-flex flex-row justify-content-between p-1">
              <div className="d-flex flex-row px-3">
                <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                  <span>
                    {" "}
                    <strong>Producto</strong>{" "}
                  </span>
                  <div className="d-flex flex-row">
                    <input
                      id="product-form"
                      type="text"
                      className="form-control"
                      aria-label="Text input with segmented dropdown button"
                      placeholder="Nombre"
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
                      products={productst}
                      handleRecord={handleRecord}
                    />
                  </div>
                </div>
                <div className="user-button input-group d-flex flex-column  pt-2 pb-2 w-50">
                  <span>
                    {" "}
                    <strong> ID </strong>{" "}
                  </span>
                  <div className="d-flex flex-row">
                    <input
                      id="ID-product-form"
                      type="text"
                      className="form-control"
                      aria-label="Text input with segmented dropdown button"
                      placeholder="Identificación"
                      onChange={setSales}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2 w-50">
                    <span>
                      {" "}
                      <strong> Cantidad </strong>{" "}
                    </span>
                    <div className="d-flex flex-row">
                      <input
                        id = "product-mount"
                        type="number"
                        className="form-control"
                        aria-label="Number input with segmented dropdown button"
                        placeholder="#"
                        onChange={changeMount}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
export default ProductForm;