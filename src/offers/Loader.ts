import {Offer} from "../interfaces"
import {PartnerPlugin} from "./PartnerPlugin"

export class OfferLoader {
  private plugins: PartnerPlugin[] = []

  public attach(plugin: PartnerPlugin) {
    plugin.init()
    this.plugins.push(plugin)
  }

  public getPluginCount(): number {
    return this.plugins.length
  }

  public async getOffers(): Promise<Offer[]> {
    return new Promise<Offer[]>(resolve => {
      const allOffers = this.plugins.map(plugin => plugin.getOffers())
      Promise.all(allOffers).then(offers => {
        const flatOffers = offers.reduce((prev, cur) => prev.concat(cur), [])
        resolve(flatOffers)
      })
    })
  }
}
