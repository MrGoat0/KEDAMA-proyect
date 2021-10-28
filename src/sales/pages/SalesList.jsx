import React, { useState, useEffect } from "react";
import FilterSearch from "../components/filterSearch";
import Footer from "../../shared/Footer";
import SalesTable from "../components/TableWithSales";
import VentasNav from "../components/VentasNav"
import '../../styles/Sales/listadoVentas.css';
import Table from 'react-bootstrap/Table'
import api from "../../api.js"


// function FilteredSearch(date, user, product, sales) {

//     let newSales = [];
//     if (date !== "" && user !== "" && product !== "") {
//         for (let element = 0; element < sales.length; element++) {
//             if (date === sales[element].fecha && user === sales[element].usuario && product === sales[element].productos) {
//                 newSales.push(sales[element]);
//             }
//         }
//     } else {
//         if (date !== "") {

//             for (let element = 0; element < sales.length; element++) {
//                 if (date === sales[element].fecha) {
//                     newSales.push(sales[element]);
//                 }
//             }
//         } else if (user !== "") {
//             for (let element = 0; element < sales.length; element++) {
//                 if (user === sales[element].usuario) {
//                     newSales.push(sales[element]);
//                 }
//             }
//         } else if (product !== "") {
//             for (let element = 0; element < sales.length; element++) {
//                 if (product === sales[element].productos) {
//                     newSales.push(sales[element]);
//                 }
//             }
//         }
//     }
//     return newSales;
// }

const SalesList = () => {
    const [sales, setSales] = useState([]);

    // const handleSubmitRecords = (newSale) => {
    //     setSales([...sales, newSale]);
    // }

    useEffect(() => {
        async function fetchData() {
            const response = await api.sales.list();
            setSales(response);
        }
        fetchData();
    }, [])

    const [IDBill, setIDBill] = useState("");
    const [date, setDate] = useState("");
    const [user, setUser] = useState("");
    const [seller, setSeller] = useState("");
    const [product, setProduct] = useState("");
    const [ShowAll, setShowAll] = useState([]);
    const [filter, setFilter] = useState([])
    let filterO = [];


    const handleChangeIdBill = (event) => {
        setIDBill(event.target.value);
    }
    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }
    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }
    const handleChangeSeller = (event) => {
        setSeller(event.target.value);
    }
    const handleChangeProduct = (event) => {
        setProduct(event.target.value);
    }

    const handleShowAll = () => {
        setShowAll(sales);
    }

    // function searchDate(date){
    //     for(let elementSales = 0; elementSales < sales.length; elementSales++){
    //         if(sales[elementSales].productInfo._id === response[elementFilter].productInfo){
    //             response[elementFilter] = sales[elementSales];
    //         }
    //     }
    //     }
    // }
    const sendFilter = async (filterO) => {
        let response = [];
        if (filterO[0]._id !== "") {
            response = [await api.sales.getByID(filterO[0]._id)];
        } else if (filterO[0].date !== "") {
            for (let elementD = 0; elementD < sales.length; elementD++) {
                if (sales[elementD].date === filterO[0].date) {
                    response.push(sales[elementD]);
                }
            }
        } else if (filterO[0].clientName !== "") {
            for (let elementC = 0; elementC < sales.length; elementC++) {
                if (sales[elementC].clientName === filterO[0].clientName) {
                    response.push(sales[elementC]);
                }
            }
        } else if (filterO[0].productInfo !== "") {
            for (let elementP = 0; elementP < sales.length; elementP++) {
                if (sales[elementP].productInfo._id === filterO[0].productInfo) {
                    response.push(sales[elementP]);
                }
            }
        } else if (filterO[0].seller !== null) {
            for (let elementS = 0; elementS < sales.length; elementS++) {
                if (sales[elementS].seller === filterO[0].seller) {
                    response.push(sales[elementS]);
                }
            }
        }
        filterO = response;
        setFilter(filterO)
        setShowAll([]);
    }
    const handleFilter = () => {

        filterO = [{
            _id: IDBill,
            state: null,
            productInfo: product,
            quantity: null,
            total: null,
            date: date,
            clientName: user,
            clientId: null,
            seller: seller
        }]
        sendFilter(filterO)
    }



    const type = "salesRecorded";

    return (
        <div>
            <body>
                <div class="container-fluid p-0 d-flex flex-column h-100">
                    <div class="container-fluid p-2 pb-4 d-flex flex-row h-100">
                        <FilterSearch handleChangeIdBill={handleChangeIdBill}
                            handleChangeProduct={handleChangeProduct}
                            handleChangeDate={handleChangeDate}
                            handleChangeUser={handleChangeUser}
                            handleChangeSeller={handleChangeSeller}
                            handleShowAll={handleShowAll}
                            handleFilter={handleFilter}
                        />
                        <div class="tableView-box d-flex flex-column p-4">
                            <div className="d-flex flex-row justify-content-end">
                                <VentasNav VentaSwitch={"Management"} />
                            </div>
                            <div className="tableView d-flex flex-row h-100 pb-3">
                                <div className="TableinTouch d-flex flex-column p-5 border border">
                                    <div id="TableArea">
                                        <Table className="sales-list-table" striped bordered hover>
                                            <SalesTable recordsData={[ShowAll, filter]} type={type} />
                                        </Table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )

}
export default SalesList