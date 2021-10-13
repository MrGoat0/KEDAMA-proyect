import '../../styles/Sales/ventas.css';
// import React,{useEffect,useState} from 'react';

const SalesForm = (props) => {

    const {changeUserID,changeProduct,changeMount} = props;

    return(
        <div className="form-left-side d-flex flex-column p-2 ">
        <div className="form-left-side-title h-25 flex-column ">
            <h2 className="pt-2 mb-2"> <strong>Información necesaria </strong></h2>
            <h6 className="pb-2"> Ingrese los campos solicitados para poder registrar correctamente una venta </h6>
        </div>
        <div className="d-flex flex-column h-75">
            <div className=" form-left-side-user d-flex flex-column py-3">
                <div className="p-2">
                    <h3>Información del usuario</h3>
                </div>
                <div className="d-flex flex-row justify-content-between p-1 ">
                    <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                        <span> <strong>Usuario</strong> </span>
                        <div className="d-flex flex-row">
                            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Nombre"/>
                            <button type="button" className="btn btn-outline-secondary">BD</button>
                        </div>
                      </div>
                    <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                        <span> <strong> ID </strong> </span>
                        <div className="d-flex flex-row">
                            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Identificación" onChange={changeUserID} />
                        </div>
                      </div>
                </div>
            </div>
            <div className="form-left-side-products d-flex flex-column py-3">
                <div className="p-2">
                    <h3>Información del producto</h3>
                </div>
                <div className="d-flex flex-row justify-content-between p-1">
                    <div className = "d-flex flex-row px-3">
                        <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                            <span> <strong>Producto</strong> </span>
                            <div className="d-flex flex-row">
                                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Nombre" onChange={changeProduct}/>
                                <button type="button" className="btn btn-outline-secondary">BD</button>
                            </div>
                        </div>
                        <div className="user-button input-group d-flex flex-column  pt-2 pb-2 w-50">
                            <span> <strong> ID </strong> </span>
                            <div className="d-flex flex-row">
                                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Identificación"/>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                        <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2 w-50">
                            <span> <strong> Cantidad </strong> </span>
                            <div className="d-flex flex-row">
                                <input type="number" className="form-control" aria-label="Number input with segmented dropdown button" placeholder="#" onChange={changeMount}/>
                        </div>
                    </div>
                    </div>
                      </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center pb-3">
                    <button type="button" className="btn btn-secondary">Submit</button>
            </div>
    </div>
    )
}

export default SalesForm