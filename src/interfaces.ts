export interface User {
  name: string
  ssn: string
  creditScore: number
}

export interface Offer {
  id: number
  provider: String
  minimumCreditScore: number
  maximumCreditScore: number
}

export interface PersonalLoanOffer extends Offer {
  term: number
  maximumAmount: number
}

export interface AutoOffer extends Offer {
  term: number
  maximumAmount: number
}
