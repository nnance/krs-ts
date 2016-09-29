import {PartnerPlugin} from "./PartnerPlugin"
import {Offer} from "../offers/Offer"
import {AutoLoan} from "../offers/AutoLoan"

export class AutoLoanPlugin extends PartnerPlugin {

  public async getOffers(): Promise<Offer[]> {
    return this.loadOffers("autoLoan", (data: any) => new AutoLoan(data))
  }

}
