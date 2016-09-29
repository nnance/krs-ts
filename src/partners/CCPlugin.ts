import {PartnerPlugin} from "./PartnerPlugin"
import {Offer} from "../offers/Offer"

export class CreditCardPlugin extends PartnerPlugin {

  public async getOffers(): Promise<Offer[]> {
    return this.loadOffers("creditCard", (data: any) => new Offer(data))
  }

}
