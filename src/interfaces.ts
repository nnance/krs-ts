export interface User {
  name: string
  ssn: string
  creditScore: number
  autoLoanBalance: number
}

export interface Offer {
  id: number
  provider: String
  minimumCreditScore: number
  maximumCreditScore: number
  type: string
}

export interface PersonalLoanOffer extends Offer {
  term: number
  maximumAmount: number
}

export interface AutoOffer extends Offer {
  term: number
  maximumAmount: number
}
