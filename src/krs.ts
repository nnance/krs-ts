import {User, Offer} from "./interfaces"
import {OfferLoader} from "./partners/Loader"
import {CreditCardPlugin} from "./partners/CCPlugin"

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
