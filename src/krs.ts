import {User} from "./User"
import {Offer} from "./offers/Offer"
import {OfferLoader} from "./partners/Loader"
import {CreditCardPlugin} from "./partners/CCPlugin"
import {PersonalLoanPlugin} from "./partners/PLPlugin"
import {AutoLoanPlugin} from "./partners/ALPlugin"

// const user: User = {
//   name: "Nick",
//   ssn: "1122232",
//   creditScore: 300,
//   autoLoanBalance: 3000,
// }
//
export async function getRecommendations(user: User): Promise<Offer[]> {
  const loader = new OfferLoader()
  loader.attach(new CreditCardPlugin())
  loader.attach(new PersonalLoanPlugin())
  loader.attach(new AutoLoanPlugin())

  const offers = await loader.getOffers()
  return offers
          .filter(offer => offer.isEligable(user))
          .map(offer => ({likelyHood: offer.likelyHood(user), offer}))
          .sort((a, b) => a.likelyHood - b.likelyHood)
          .map(offer => offer.offer)
}
