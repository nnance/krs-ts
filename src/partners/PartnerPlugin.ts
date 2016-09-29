import * as fs from "fs"
import {Offer} from "../offers/Offer"

const dataFile = "./data/offers.json"

export abstract class PartnerPlugin {

  public abstract async getOffers(): Promise<Offer[]>

  public async init(): Promise<void> {
    return
  }

  protected async loadOffers(offerType: string): Promise<Offer[]> {
    return new Promise<Offer[]>(resolve => {
      fs.readFile(dataFile, "utf8", (err, data) => {
        const offers = JSON.parse(data)
        const offersByType = offers.filter(offer => Object.keys(offer)[0] === offerType)
        const transformedOffer = offersByType.map(offer => new Offer(offer[offerType]))
        resolve(transformedOffer)
      })
    })
  }
}
