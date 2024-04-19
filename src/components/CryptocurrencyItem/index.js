// Write your JS code here
import './index.css'

const CryptoItemComponent = props => {
  const {fullData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = fullData
  return (
    <li className="licl">
      <div className="mainMoneyDivItem">
        <div className="currencyLogoDiv">
          <img className="logo" src={currencyLogo} alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div className="moneyValue">
          <p className="usdPara">{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptoItemComponent
