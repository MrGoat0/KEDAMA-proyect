const SalesBill = (props) => {
    
    const {userID,product,mount,date} = props;
    const dateString = Object.freeze(date)
    // console.log((userID, product,mount))
    return(
        <div className="form-right-side d-flex flex-column px-4">
        <div className="form-right-side-title d-flex justify-content-center flex-column align-items-center h-25">
            <h2 className="pt-2 mb-2"> <strong>Facturación</strong></h2>
        </div>
        <div className="form-right-side-sell d-flex flex-column px-5 py-4 pb-4">
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Fecha: </h5> </div>
                <div className="p-1"> {dateString} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>ID-factura: </h5>  </div>
                <div className="p-1"> 0000 </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>ID-usuario: </h5>  </div>
                <div className="p-1"> {userID} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Producto: </h5> </div>
                <div className="p-1"> {product} </div>
            </div>
            <div className="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                <div className="p-1"> <h5>Cantidad: </h5> </div>
                <div className="p-1"> {mount} </div>
            </div>
            <div className="d-flex flex-row justify-content-end pt-3 px-5">
                <div className="px-4"> <h4><strong>TOTAL:</strong> </h4></div>
                <div className=""> 00000 </div>
            </div>
            
        </div>
    </div>
    )
}
export default SalesBill