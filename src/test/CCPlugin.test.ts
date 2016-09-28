import {expect} from "chai"
import {User} from "../interfaces"
import {CreditCardPlugin} from "../offers/CCPlugin"

describe("CCPlugin", () => {
  const user: User = {
    name: "Test User",
    ssn: "111111111",
    creditScore: 600,
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
    const plugin = new CreditCardPlugin()
    it("expect 3 offers to be returned", async () => {
      const offers = await plugin.getOffers(user)
      expect(offers.length).to.equal(3)
    })
  })
})
