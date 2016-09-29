import {User} from "../interfaces"

export class Offer {
  public id: number
  public provider: String
  public minimumCreditScore: number
  public maximumCreditScore: number

  constructor(data: any) {
    this.id = data.id
    this.provider = data.provider
    this.minimumCreditScore = data.minimumCreditScore
    this.maximumCreditScore = data.maximumCreditScore
  }

  public isEligable(user: User): boolean {
    return user.creditScore >= this.minimumCreditScore && user.creditScore <= this.maximumCreditScore
  }
}
