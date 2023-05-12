

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

describe("Testing for days of the week values", function() {

    const daysInstance = matching_day()

    

    it("it should test for both values Monday when  a date on Monday is selected", function() {
        daysInstance.set_date_value_1("05/01/2023")
        
        assert.equal("Monday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/01/2023")
        
        assert.equal("Monday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })

    it("it should test for both values Tuesday when a date on Tuesday is selected", function() {
        daysInstance.set_date_value_1("05/02/2023")
        
        assert.equal("Tuesday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/02/2023")
        
        assert.equal("Tuesday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })

    it("it should test for both values Wednesday when a date on Wednesday is selected", function() {
        daysInstance.set_date_value_1("05/03/2023")
        
        assert.equal("Wednesday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/03/2023")
        
        assert.equal("Wednesday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })

    it("it should test for both values Thursday when a date on Thursday is selected", function() {
        daysInstance.set_date_value_1("05/04/2023")
        
        assert.equal("Thursday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/04/2023")
        
        assert.equal("Thursday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })

    it("it should test for both values Friday when a date on Friday is selected", function() {
        daysInstance.set_date_value_1("05/05/2023")
        
        assert.equal("Friday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/05/2023")
        
        assert.equal("Friday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })

    it("it should test for both values Saturday when a date on Saturday is selected", function() {
        daysInstance.set_date_value_1("05/06/2023")
        
        assert.equal("Saturday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/06/2023")
        
        assert.equal("Saturday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })

    it("it should test for both values Sunday when a date on Sunday is selected", function() {
        daysInstance.set_date_value_1("05/7/2023")
        
        assert.equal("Sunday", daysInstance.get_day_class(daysInstance.get_date_value_1()))

        daysInstance.set_date_value_2("05/7/2023")
        
        assert.equal("Sunday", daysInstance.get_day_class(daysInstance.get_date_value_2()))
    })


    describe("Testing for days of the week that match or do not mtach", function() {

    })

})