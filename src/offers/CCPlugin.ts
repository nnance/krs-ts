import {PartnerPlugin} from "./PartnerPlugin"
import {Offer} from "../interfaces"

export class CreditCardPlugin extends PartnerPlugin {

  public async getOffers(): Promise<Offer[]> {
    return this.loadOffers("creditCard")
  }

}
