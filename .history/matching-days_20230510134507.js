
const first_date_input  = document.querySelector("#first_date")
const second_date_input = document.querySelector("#second_date")


const daysInstance = matching_days()


daysInstance.set_date_value(first_date_input.value, second_date_input.value)

document.addEventListener("DOMContentLoaded", function() {

    const template_source = document.querySelector("#days_template").innerHTML
    const days_template = Handlebars.compile(template_source)
    const days_data_display = document.querySelector(".days_container")

    const daysData = {
        different_days: [
            { day: "Monday"},
            { day: "Tuesday"},
            { day: "Wednesday"},
            { day: "Thursday"},
            { day: "Friday"},
            { day: "Saturday"},
            { day: "Sunday"}
        ]
    }

    const daysDataHTML = days_template(daysData)

    days_data_display.innerHTML = daysDataHTML

})