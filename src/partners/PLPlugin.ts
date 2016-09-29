import {PartnerPlugin} from "./PartnerPlugin"
import {Offer} from "../offers/Offer"
import {PersonalLoan} from "../offers/PersonalLoan"

export class PersonalLoanPlugin extends PartnerPlugin {

  public async getOffers(): Promise<Offer[]> {
    return this.loadOffers("personalLoan", (data: any) => new PersonalLoan(data))
  }

}
