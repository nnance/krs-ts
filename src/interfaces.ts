export interface User {
  name: string
  ssn: string
  creditScore: number
}

export interface Offer {
  partnerName: String
  likelyHood: String
}

export interface CreditCardOffer extends Offer {
  apr: Number
  rewards: Boolean
}

export interface PersonalLoanOffer extends Offer {
  apr: Number
  length: Number
}
