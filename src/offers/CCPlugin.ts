import {PartnerPlugin} from "./PartnerPlugin"
import {User, Offer} from "../interfaces"
import * as fs from "fs"

const dataFile = "./data/ccoffers.json"

export class CreditCardPlugin extends PartnerPlugin {

  public async getOffers(user: User): Promise<Offer[]> {
    return new Promise<Offer[]>(resolve => {
      fs.readFile(dataFile, "utf8", (err, offers) => {
        resolve(JSON.parse(offers))
      })
    })
  }

}
