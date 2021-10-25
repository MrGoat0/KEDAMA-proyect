const SalesBill = (props) => {
    
    const {price, state,mount, total,date} = props;

    return(
        <div className="form-right-side d-flex flex-column px-4">
        <div className="form-right-side-title d-flex justify-content-center flex-column align-items-center h-25">
            <h2 className="pt-2 mb-2"> <strong>Facturación</strong></h2>
        </div>
        <div className="form-right-side-sell d-flex flex-column px-3 py-4 pb-4">
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5 id="date" >Fecha: </h5> </div>
                <div className="p-1"> {date} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Estado de venta: </h5>  </div>
                <div className="p-1"> {state} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Nombre: </h5>  </div>
                <div className="p-1"> <span id="user-name"></span> </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Producto: </h5> </div>
                <div className="p-1"> <span id="product-description"></span>  </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Cantidad: </h5> </div>
                <div className="p-1"> {mount} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Precio x Unidad: </h5> </div>
                <div className="p-1"> {price} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Vendedor: </h5> </div>
                <div className="p-1"> <span id="seller-name"></span>  </div>
            </div>
            <div className="d-flex flex-row justify-content-end pt-3 px-5">
                <div className="px-4"> <h4><strong>TOTAL:</strong> </h4></div>
                <div className=""> {total} </div>
            </div>
            
        </div>
    </div>
    )
}
export default SalesBill