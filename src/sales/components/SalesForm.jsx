
import UserForm from "./UserForm";
import ProductsForm from "./ProductsForms ";
import '../../styles/Sales/ventas.css';

const SalesForm = (props) => {

    const {changeUserID,changeProduct, changeMount} = props;

    return (
      <div className="form-left-side d-flex flex-column p-2 ">
        <div className="form-left-side-title h-25 flex-column ">
          <h2 className="pt-2 mb-2">
            {" "}
            <strong>Información necesaria </strong>
          </h2>
          <h6 className="pb-2">
            {" "}
            Ingrese los campos solicitados para poder registrar correctamente
            una venta{" "}
          </h6>
        </div>
        <div className="d-flex flex-column h-75">
          <div className=" form-left-side-user d-flex flex-column py-3">
              <UserForm changeUserID={changeUserID}/>
          </div>
          <div className="form-left-side-products d-flex flex-column py-3">
            <ProductsForm changeProduct={changeProduct} changeMount={changeMount}/>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-3">
          <button type="button" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </div>
    );
}

export default SalesForm