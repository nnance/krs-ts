import Offer from './offer'

interface CreditCardOffer extends Offer {
  apr: Number
  rewards: Boolean
}

export default CreditCardOffer
