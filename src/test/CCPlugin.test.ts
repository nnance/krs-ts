import {expect} from "chai"
import {User} from "../User"
import {Offer} from "../offers/Offer"
import {CreditCardPlugin} from "../partners/CCPlugin"

describe("CCPlugin", () => {
  const user: User = {
    name: "Test User",
    ssn: "111111111",
    creditScore: 600,
    autoLoanBalance: 0,
  }

  describe("when instatiated", () => {
    let plugin
    before(() => {
      plugin = new CreditCardPlugin()
    })
    it("expect plugin to exist", () => {
      expect(plugin).to.exist
    })
  })

  describe("when loding offers", () => {
    let plugin
    let offers: Offer[]
    before(async () => {
      plugin = new CreditCardPlugin()
      offers = await plugin.getOffers(user)
    })
    it("expect 3 offers to be returned", () => {
      expect(offers.length).to.equal(3)
    })
    it("expect provider to be CapitalOne", () => {
      expect(offers[0].provider).to.equal("CapitalOne")
    })
  })
})
