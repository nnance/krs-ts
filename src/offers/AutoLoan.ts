import {User} from "../User"
import {Offer} from "./Offer"

export class AutoLoan extends Offer {
  public term: number
  public maximumAmount: number

  constructor(data: any) {
    super(data)
    this.term = data.term
    this.maximumAmount = data.maximumAmount
  }

  public isEligable(user: User): boolean {
    return super.isEligable(user) && user.autoLoanBalance < this.maximumAmount
  }
}
