

describe("Testing for matching days values", function() {

    const daysInstance = matching_day()

    it("should test first input and get value", function() {

        daysInstance.set_date_value_1("22/5/23")

        assert.equal("22/5/23", daysInstance.get_date_value_1())
    })

})