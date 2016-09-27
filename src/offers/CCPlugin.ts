import {PartnerPlugin} from "./PartnerPlugin"
import {User, Offer} from "../interfaces"

export class CreditCardPlugin extends PartnerPlugin {
  public async getOffers(user: User): Promise<Offer[]> {
    return new Promise<Offer[]>(resolve => {
        setTimeout(resolve([]), 1000)
    })
  }
}
