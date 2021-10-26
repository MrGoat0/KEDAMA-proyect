// import React,{useState} from "./react"
const FilterSearch = (props) => {
    const { handleChangeIdBill,
        handleChangeProduct,
        handleChangeDate,
        handleChangeUser,
        handleChangeSeller,
        handleShowAll,
        handleFilter } = props
    // const handleClean = ()=>{

    // }

    return (
        <div class="search-options-box d-flex flex-column">
            <div class="info-text flex-column px-4 py-3 ">
                <div class="text-start text-center">
                    <strong>Gestión de ventas</strong>
                </div>
                <div class="text-below-start text-center">
                    Aquí podrás buscar y actualizar las ventas registradas
                </div>
            </div>
            <div class="search-options d-flex flex-column h-75 m-3 p-2">
                <div class="d-flex flex-column h-25 rounded">
                    <div class="d-flex flex-column justify-content-center align-items-center h-75">
                        <h1 class="p-2 mt-5 text-center text-dark"> <strong>Ventas <br />Registradas</strong></h1>
                    </div>
                </div>
                <div class="d-flex flex-column h-75 p-2 rounded">
                    <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                        <div class="p-1"> <h5>ID-factura: </h5>  </div>
                        <div class="ps-2">
                            <input type="text" class="form-control" aria-label="Text input" placeholder="Identificador" id="ID-bill" onChange={handleChangeIdBill} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                        <div class="p-1"> <h5>Fecha: </h5> </div>
                        <div class="ps-2">
                            <input type="text" class="form-control" aria-label="Text input" placeholder="Fecha de la venta" id="date" onChange={handleChangeDate} />
                            {/* {console.log(document.getElementById('date').value)} */}
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                        <div class="p-1"> <h5>Usuario: </h5> </div>
                        <div class="ps-2">
                            <input type="text" class="form-control" aria-label="Text input" placeholder="Usuario" id="user" onChange={handleChangeUser} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                        <div class="p-1"> <h5>Producto: </h5> </div>
                        <div class="ps-2">
                            <input type="text" class="form-control" aria-label="Text input" placeholder="Nombre del producto" id="product" onChange={handleChangeProduct} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                        <div class="p-1"> <h5>Vendedor: </h5> </div>
                        <div class="ps-2">
                            <input type="text" class="form-control" aria-label="Text input" placeholder="Nombre" id="seller" onChange={handleChangeSeller} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between p-3 px-5">
                        <button type="button" class="btn btn-success p-sm-3" onClick={handleFilter}>Mostrar</button>
                        <button type="button" class="btn btn-success" onClick={handleShowAll}>Mostrar todos los <br /> registros</button>
                    </div>
                    {/* <div class="d-flex flex-row justify-content-center p-3 px-5">
                            <button type="button" class="btn btn-success" onClick={handleShowAll}>Mostrar todos los <br/> registros</button>
                            {/* <button type="button" class="btn btn-primary" >Limpiar</button> 
                        </div> */}

                </div>

            </div>
        </div>
    )
}
export default FilterSearch;