import {User} from "../interfaces"
import {Offer} from "./Offer"

export class PersonalLoan extends Offer {
  public term: number
  public maximumAmount: number

  constructor(data: any) {
    super(data)
    this.term = data.term
    this.maximumAmount = data.maximumAmount
  }

  public isEligable(user: User): boolean {
    return super.isEligable(user)
  }
}
