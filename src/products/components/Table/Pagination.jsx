import { Button } from "react-bootstrap"

const Pagination = (props) => {
    const { countRecords, page, setPage, filterState } = props;
    const nPages = Math.floor(countRecords / 40) + 1

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
    }

    return (
        <>
            <Button
                type="submit"
                onClick={previousPage}
                disabled={page <= 1 ? true : false}
                hidden={filterState === "Filtrar" ? false : true}
                variant={page <= 1 ? "outline-secondary" : "secondary"}>⇦
            </Button>

            <span >
                {filterState === "Filtrar" ? "página " + page + " de " + nPages : "Resultado del filtro."}
            </span>

            <Button
                type="submit"
                onClick={nextPage}
                disabled={page >= nPages ? true : false}
                hidden={filterState === "Filtrar" ? false : true}
                variant={page >= nPages ? "outline-secondary" : "secondary"}>⇨
            </Button></>
    )
}

export default Pagination;