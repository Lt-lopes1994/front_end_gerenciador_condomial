import Table from 'react-bootstrap/Table';

export default function BillsTable({ billsList }) {
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>VALOR</th>
                    <th>STATUS</th>
                    <th>NÚMERO DA FATURA</th>
                    <th>VENCIMENTO</th>
                </tr>
            </thead>
            <tbody>
                {
                    billsList.map((invoice) => (
                        <tr key={invoice.id}>
                            <td>R$ {(invoice.amount_due / 100).toFixed(2).replace('.', ',')}</td>
                            <td>{invoice.status}</td>
                            <td>{invoice.number}</td>
                            <td>{new Date(invoice.due_date * 1000).toLocaleDateString()}</td>
                            <td>
                                <button
                                    className='btnBills btnPayBills'
                                    onClick={() => window.open(invoice.hosted_invoice_url, '_blank')}
                                >
                                    Pagar Fatura
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}