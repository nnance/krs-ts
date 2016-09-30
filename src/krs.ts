import {User} from "./User"
import {OfferLoader} from "./partners/Loader"
import {CreditCardPlugin} from "./partners/CCPlugin"
import {PersonalLoanPlugin} from "./partners/PLPlugin"
import {AutoLoanPlugin} from "./partners/ALPlugin"

const user: User = {
  name: "Nick",
  ssn: "1122232",
  creditScore: 300,
  autoLoanBalance: 5000,
}

function likelyHoodSort(a, b) {
  if (a.likelyHood < b.likelyHood) {
    return -1
  } else if (a.likelyHood > b.likelyHood) {
    return 1
  }
  return 0
}

const loader = new OfferLoader()
loader.attach(new CreditCardPlugin())
loader.attach(new PersonalLoanPlugin())
loader.attach(new AutoLoanPlugin())

loader.getOffers()
  .then(offers => {
    const available = offers
                        .filter(offer => offer.isEligable(user))
                        .map(offer => ({likelyHood: offer.likelyHood(user), offer}))
                        .sort(likelyHoodSort)
                        // .map(offer => offer.offer)
    console.dir(available[0])
  })
