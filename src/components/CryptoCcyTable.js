import React from 'react'
import Props from 'prop-types'
import numeral from 'numeral'
const css = require('./CryptoCcyList.css');


// CRYPTO CURRENCY TABLE
const CURRENCY_NAME = ["SGD", "AUD", "EUR", "GBP", "USD", "VND"]
class CryptoCcyTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

 // Sort based on rank
  sortData () {
    return  (a, b) => a['rank'] - b['rank']
  }
  
    render () {
    const { cryptoCcyList, selectedCy, handleCyChange } = this.props
    const priceAttr = `price_${selectedCy.toLowerCase()}`
    return (
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableHRow}>
            <th className={css.th}># Rank</th>
             <th className={css.th}>Crypto Currency</th>
              <th className={css.th}><span>Price </span>
                 <select onChange={handleCyChange} value={selectedCy}>
                {CURRENCY_NAME.map((item, i) => {
                      return (<option key={i} value={item}>{item}</option>)
                    })
                  }
                </select>
              </th>
              <th className={css.th}>% Change</th>
          </tr>
        </thead>
        <tbody>
          {
            cryptoCcyList.sort(this.sortData()).map((item, i) => {
              const cssCls = `${css.tableData} ${item.percent_change_24h > 0 ? css.green: css.red}`
              return (
                <tr key={i} className={css.tableRow}>
                  <td className={css.tableData}>{item.rank}</td>
                  <td className={css.tableData}>{item.name}</td>
                  <td className={css.tableData}>{`${selectedCy} ${numeral(item[priceAttr]).format('0,0.00')}`}</td>
                  <td className={cssCls}>{`${item.percent_change_24h}%`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

CryptoCcyTable.propTypes = {
  cryptoCcyList: Props.array.isRequired,
}

export default CryptoCcyTable
