import FilterByLevel from './FilterByLevel'

export default function SpendingTable ({numRow, user, spendings}) {

    let filteredSpending = spendings.filter(f => <FilterByLevel item={f} user={user}/>).reverse()
    let num = parseInt(numRow.numRow)
    if (num > filteredSpending.length){
        num = filteredSpending.length
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody className="bg-gray-200/50">
                {filteredSpending.slice(0,num).map(e => (
                    <tr>
                        <td>{e.mydate}</td>
                        <td>{e.title}</td>
                        <td>{e.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>  
    )
}