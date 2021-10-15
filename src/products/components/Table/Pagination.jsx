import { Button } from "react-bootstrap"

const Pagination = (props) => {
    const { countRecords, page, setPage } = props;
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
                variant={page <= 1 ? "outline-secondary" : "secondary"}>⇦
            </Button>

            <span>página {page} de {nPages}</span>

            <Button
                type="submit"
                onClick={nextPage}
                disabled={page >= nPages ? true : false}
                variant={page >= nPages ? "outline-secondary" : "secondary"}>⇨
            </Button></>
    )
}

export default Pagination;