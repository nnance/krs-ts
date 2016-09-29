import {expect} from "chai"
import {OfferLoader} from "../partners/Loader"
import {CreditCardPlugin} from "../partners/CCPlugin"

class Plugin {
  public initCalled = false
  public init() {
    this.initCalled = true
  }
}

describe("Offers Loader", () => {
  describe("when instatiated", () => {
    it("it should exist", () => {
      const loader = new OfferLoader()
      expect(loader).to.exist
    })
  })

  describe("when attaching a plugin", () => {
    let loader
    let plugin
    before(() => {
      loader = new OfferLoader()
      plugin = new Plugin()
      loader.attach(plugin)
    })
    it("expect plugin init to be called", () => {
      expect(plugin.initCalled).to.be.true
    })
    it("expect plugin count to be one", () => {
      expect(loader.getPluginCount()).to.equal(1)
    })
  })

  describe("when getting credit card offers", () => {
    it("expect offer count to be three", async () => {
      const loader = new OfferLoader()
      loader.attach(new CreditCardPlugin())
      const offers = await loader.getOffers()
      expect(offers.length).to.equal(3)
    })
  })
})
