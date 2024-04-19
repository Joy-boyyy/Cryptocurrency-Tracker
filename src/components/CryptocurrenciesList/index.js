// Write your JS code here
import {Component} from 'react'
import CryptoItemComponent from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrencyListComponent extends Component {
  state = {
    myArr: [],
  }

  componentDidMount() {
    this.serverDataFetching()
  }

  serverDataFetching = async () => {
    const fetchedDataFromServer = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const jsonModified = await fetchedDataFromServer.json()

    console.log(jsonModified)

    const modifiedObjKey = jsonModified.map(mapProp => ({
      currencyName: mapProp.currency_name,
      usdValue: mapProp.usd_value,
      euroValue: mapProp.euro_value,
      currencyLogo: mapProp.currency_logo,
      id: mapProp.id,
    }))

    this.setState({myArr: modifiedObjKey})
  }

  render() {
    const {myArr} = this.state

    return (
      <div className="cryptoListMAinCL">
        <div className="mainCryptoDiv">
          <h1 className="cryptoH1">Cryptocurrency Tracker</h1>
          <img
            className="cryptoImgCL"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>

        <div className="cryptoItemDiv">
          <div className="headingRelatedToMoney">
            <div>
              <p>Coin Type</p>
            </div>
            <div className="moneyRelatedDiv">
              <div className="usdDiv">
                <p>USD</p>
              </div>
              <div>
                <p>EURO</p>
              </div>
            </div>
          </div>
          <ul>
            {myArr.map(mapProp => (
              <CryptoItemComponent key={mapProp.id} fullData={mapProp} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptoCurrencyListComponent
