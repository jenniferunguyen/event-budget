import { SpendingContext, useSpendings } from '../context/SpendingContext'
import Link from 'next/link'
import FilterByLevel from './FilterByLevel'

export default function SpendingTable (numRow) {

    const { spendings, setSpendings } = useSpendings()
    let filteredSpending = spendings.filter(f => <FilterByLevel item={f}/>).reverse()
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
            <tbody>
                {filteredSpending.slice(0,num).map(e => (
                    <tr>
                        <td>{e.date}</td>
                        <td>{e.title}</td>
                        <td>{e.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>     
    )
}