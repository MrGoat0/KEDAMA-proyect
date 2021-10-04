import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {

    const { records, searchId, setDescription, setPrice, setState,searchDescription } = props;
  console.log(rows)
    if (records){
        for (let index = 0; index < records.length; index++) {
           
            if (Object.keys(records[index]).length==0){
                console.log(records[index])
                records.splice(index,1);
                console.log(records[index])
            } 
            
        }
          

    }
    if (searchId) {
        var filteredRecords = records.find((item) => item.id === parseInt(searchId));
        if (filteredRecords) {
      
            const inLoc = records.indexOf(filteredRecords);
            var searchFirst = [...records]
            searchFirst.splice(inLoc, 1)
            var rows = [filteredRecords, ...searchFirst]
        } else {
            rows = [...records]
        }

    } else {
        rows = [...records]
    }
    if (searchDescription) {
         filteredRecords = records.find((item) => item.description === searchDescription);
        if (filteredRecords) {
           
            const inLoc = records.indexOf(filteredRecords);
            var searchFirst = [...records]
            searchFirst.splice(inLoc, 3)
            var rows = [filteredRecords, ...searchFirst]
           
        } else {
            rows = [...records]
        }

    } else {
        rows = [...records]
    }
    return (
        <Table className="table" size="sm" striped bordered hover variant="dark">
            <TableHeader isEmpty={rows.length === 0} />
            <TableBody records={rows}
                search={filteredRecords}
                setDescription={setDescription}
                setPrice={setPrice}
                setState={setState} />
        </Table>

    )
}

export default ProductTable;