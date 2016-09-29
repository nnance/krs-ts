import {User} from "./User"
import {OfferLoader} from "./partners/Loader"
import {CreditCardPlugin} from "./partners/CCPlugin"
import {PersonalLoanPlugin} from "./partners/PLPlugin"
import {AutoLoanPlugin} from "./partners/ALPlugin"

// function filterAutoLoands(user: User, offers: Offer[]): Offer[] {
//   return offers.filter(offer => offer.type !== "autoLoan" || (offer.type === "autoLoan" && user.) )
// }

const user: User = {
  name: "Nick",
  ssn: "1122232",
  creditScore: 300,
  autoLoanBalance: 5000,
}

const loader = new OfferLoader()
loader.attach(new CreditCardPlugin())
loader.attach(new PersonalLoanPlugin())
loader.attach(new AutoLoanPlugin())

loader.getOffers()
  .then(offers => {
    const available = offers.filter(offer => offer.isEligable(user))
    console.dir(available.length)
  })
