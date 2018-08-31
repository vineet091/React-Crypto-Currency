import React from 'react'
import { connect } from 'react-redux'
import Props from 'prop-types'
import { bindActionCreators } from 'redux'
import numeral from 'numeral'
import mockData from '../api/data'
import { getCryptoData } from '../actions/CryptoCcyListActions'
import CryptoCcyTable from './CryptoCcyTable'
const css = require('./CryptoCcyList.css');

 class CryptoCcyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedCy: 'SGD'
        };
    }

    componentDidMount () {
      if (this.props.cryptoCcyList.length === 0) {
        this.props.getCryptoData(this.state.selectedCy)
      }
    }

   //  Function to handle onChange event on Currency Select
    handleCyChange(event) {
      if ((event.target.value !== this.state.selectedCy)) {
        if(event.target.value !== 'USD')  { // USD Price already coming with other currency
            this.props.getCryptoData(event.target.value)
        }
        this.setState({ selectedCy: event.target.value })
      }

    }

    render() {
        const { cryptoCcyList } = this.props
        const { selectedCy } = this.state
        return (
          <div className={css.wrapper}>
                  <div className={css.panel}>
                    <div className={css.appBar}>
                      <div className={css.panelHeader} >
                        <h1 className={css.panelTitle}>Crypto Currency Details</h1>
                      </div>
                    </div>
                    <div className={css.panelBody}>
                      <CryptoCcyTable  cryptoCcyList={cryptoCcyList} selectedCy={selectedCy} handleCyChange={this.handleCyChange.bind(this)} / >
                    </div>
                    <div className={css.panelFooter} />
                  </div>
                </div>
        );
    }
}

CryptoCcyList.propTypes = {
  cryptoCcyList: Props.array.isRequired,
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
getCryptoData,
  }, dispatch)

const mapStateToProps = state => ({
    cryptoCcyList: state.cryptoCcyList.payload,
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCcyList)
