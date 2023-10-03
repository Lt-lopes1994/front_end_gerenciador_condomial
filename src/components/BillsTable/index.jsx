import Table from 'react-bootstrap/Table';

export default function BillsTable({ billsList }) {
    console.log(billsList)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>VALOR</th>
                    <th>STATUS</th>
                    <th>NÚMERO DA FATURA</th>
                    <th>VENCIMENTO</th>
                </tr>
            </thead>
            {
                billsList.map((invoice) => (
                    <tbody key={invoice.id}>
                        <tr>
                            <td>R$ {(invoice.amount_due / 100).toFixed(2).replace('.', ',')}</td>
                            <td>{invoice.status}</td>
                            <td>{invoice.number}</td>
                            <td>{new Date(invoice.due_date * 1000).toLocaleDateString()}</td>
                            <td>
                                <button>
                                    Pagar Fatura
                                </button>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                        </tr> */}
                    </tbody>
                ))
            }
        </Table>
    );
}