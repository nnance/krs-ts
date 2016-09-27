import {User, Offer} from "../interfaces"

export abstract class PartnerPlugin {
  public abstract async getOffers(user: User): Promise<Offer[]>
  public async init(): Promise<void> {
    return
  }
}
