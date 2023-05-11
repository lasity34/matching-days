

describe("Testing for matching days values", function() {

    const daysInstance = matching_day()

    it("should test first input and get value", function() {

        daysInstance.set_date_value_1("22/5/23")

        assert.equal("22/5/23", daysInstance.get_date_value_1())
    })

    it("should test second input and get value", function() {

        daysInstance.set_date_value_2("25/5/23")

        assert.equal("25/5/23", daysInstance.get_date_value_2())
    })

    it("should test first input and second input see if both are the same", function() {

        daysInstance.set_date_value_1("25/5/23")
        daysInstance.set_date_value_2("25/5/23")

        assert.equal(true, daysInstance.is_same_day())
    })

})