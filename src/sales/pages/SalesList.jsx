import React,{useState,useEffect} from "react";
import FilterSearch from "../components/filterSearch";
import Footer from "../../shared/Footer";
import VentasNav from "../components/VentasNav"
import SalesTable from "../components/TableWithSales"
import '../../styles/Sales/listadoVentas.css';
import Table from 'react-bootstrap/Table'
import api from "../../api.js"


function FilteredSearch(date, user, product, sales){
    
    let newSales = [];
    if(date !== "" && user !== "" && product !== ""){
        for(let element = 0; element < sales.length; element++){
            if(date === sales[element].fecha && user === sales[element].usuario && product === sales[element].productos){
                newSales.push(sales[element]);
            }
        }        
    }else{
        if(date !== ""){

            for(let element = 0; element < sales.length; element++){
                if(date === sales[element].fecha){
                    newSales.push(sales[element]);
                }
            }
        }else if(user !== ""){
            for(let element = 0; element < sales.length; element++){
                if(user === sales[element].usuario){
                    newSales.push(sales[element]);
                }
            }
        }else if(product !== ""){
            for(let element = 0; element < sales.length; element++){
                if(product === sales[element].productos){
                    newSales.push(sales[element]);
                }
            }
        }
    }
    return newSales;
}

const SalesList = () => {
    const [sales,setSales] = useState([]);
  
  const handleSubmitRecords =(newSale)=>{
    setSales([...sales, newSale]);
  }

  useEffect(()=>{
    async function fetchData(){
      const response = await api.sales.list();
      setSales(response);
    }
    fetchData();
  },[])

  const [IDBill,setIDBill] = useState("");
  const [date,setDate] = useState("");
  const [user,setUser] = useState("");
  const [product,setProduct] = useState("");
  const [ShowAll,setShowAll] = useState([]);
  const [filter,setFilter] = useState([]);
  

  const handleChangeIdBill=(event)=>{
      setIDBill(event.target.value);
    }
    const handleChangeDate=(event)=>{
      setDate(event.target.value);
    }
    const handleChangeUser=(event)=>{
        setUser(event.target.value);
    }
    const handleChangeProduct=(event)=>{
        setProduct(event.target.value);
    }
    
    const handleShowAll=()=>{
        setShowAll(sales);
    }
    const handleFilter=()=>{
        setFilter(FilteredSearch (date, user, product, sales));
    }

    const type = "salesRecorded";
    
return(
    <div>
        <body>
    <div class="container-fluid p-0 d-flex flex-column h-100">
 

        <div class="container-fluid p-2 pb-4 d-flex flex-row h-100">
            <FilterSearch handleChangeIdBill={handleChangeIdBill}
            handleChangeProduct={handleChangeProduct}
            handleChangeDate={handleChangeDate}
            handleChangeUser={handleChangeUser}
            handleShowAll={handleShowAll}
            handleFilter={handleFilter}
            />
            <div class="tableView-box d-flex flex-column p-4">
                <div className="d-flex flex-row justify-content-end">
                <VentasNav VentaSwitch={"Management"} />
                </div>
                <div className="tableView d-flex flex-row h-100 p-2 border border">
                    <div className="TableinTouch d-flex flex-column p-5 border border">
                      <div id="TableArea">
                      <Table striped bordered hover>
                        <SalesTable recordsData={[ShowAll,filter]} type={type} clean={"TableArea"}/>
                      </Table>
                      </div>
                    </div>
                    <div class="ScrollTable d-flex border border"></div>
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