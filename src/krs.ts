import * as fs from "fs"
import {User, Offer} from "./interfaces"
import {OfferLoader} from "./offers/Loader"
import {CreditCardPlugin} from "./offers/CCPlugin"

const dataFile = "./data/offers.json"

async function getOffers(offerType: string): Promise<Offer[]> {
  return new Promise<Offer[]>(resolve => {
    fs.readFile(dataFile, "utf8", (err, data) => {
      const offers = JSON.parse(data)
      const offersByType = offers.filter(offer => Object.keys(offer)[0] === offerType)
      const transformedOffer = offersByType.map(offer => {
        let newOffer = offer[offerType]
        newOffer.type = offerType
        return newOffer
      })
      resolve(transformedOffer)
    })
  })
}

async function getAllOffers(offerTypes: string[]): Promise<Offer[]> {
  return new Promise<Offer[]>(resolve => {
    const allOffers = offerTypes.map(offerType => getOffers(offerType))
    Promise.all(allOffers).then(offers => {
      const flatOffers = offers.reduce((prev, cur) => prev.concat(cur), [])
      resolve(flatOffers)
    })
  })
}

function filterByCreditScore(user: User, offers: Offer[]): Offer[] {
  return offers.filter(offer => user.creditScore >= offer.minimumCreditScore && user.creditScore <= offer.maximumCreditScore)
}

// function filterAutoLoands(user: User, offers: Offer[]): Offer[] {
//   return offers.filter(offer => offer.type !== "autoLoan" || (offer.type === "autoLoan" && user.) )
// }

const user: User = {
  name: "Nick",
  ssn: "1122232",
  creditScore: 700,
  autoLoanBalance: 0,
}

const loader = new OfferLoader()
loader.attach(new CreditCardPlugin())
loader.getOffers()
  .then(offers => {
    const available = filterByCreditScore(user, offers)
    console.dir(available.length)
  })
