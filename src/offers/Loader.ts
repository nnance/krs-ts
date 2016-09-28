import {User, Offer} from "../interfaces"
import {PartnerPlugin} from "./PartnerPlugin"

export class OfferLoader {
  private plugins: PartnerPlugin[] = []

  public async attach(plugin: PartnerPlugin) {
    await plugin.init()
    this.plugins.push(plugin)
  }

  public async getOffers(user: User): Promise<Offer[]> {
    return new Promise<Offer[]>(resolve => {
      const offers = this.plugins.map(plugin => plugin.getOffers(user))
      Promise.all(offers).then(results => {
        const flattened = results.reduce((a, b) => a.concat(b), [])
        resolve(flattened)
      })
    })
  }
}
