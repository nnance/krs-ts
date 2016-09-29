import {User} from "./interfaces"
import {OfferLoader} from "./partners/Loader"
import {CreditCardPlugin} from "./partners/CCPlugin"

// function filterAutoLoands(user: User, offers: Offer[]): Offer[] {
//   return offers.filter(offer => offer.type !== "autoLoan" || (offer.type === "autoLoan" && user.) )
// }

const user: User = {
  name: "Nick",
  ssn: "1122232",
  creditScore: 300,
  autoLoanBalance: 0,
}

const loader = new OfferLoader()
loader.attach(new CreditCardPlugin())

loader.getOffers()
  .then(offers => {
    const available = offers.filter(offer => offer.isEligable(user))
    console.dir(available.length)
  })
