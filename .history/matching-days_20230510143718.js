
const first_date_input  = document.querySelector("#first_date")
const second_date_input = document.querySelector("#second_date")
const days_data_display = document.querySelector(".days_container")

const daysInstance = matching_days()

function matching_days_update() {

    daysInstance.set_date_value(first_date_input.value, second_date_input.value)
    daysInstance.get_day()

    daysTemplate()

}


document.addEventListener("DOMContentLoaded", function() {

    function daysTemplate() {
        const template_source = document.querySelector("#days_template").innerHTML
        const days_template = Handlebars.compile(template_source)
        
    
        const daysData = {
            different_days: [
                { day: "Monday" },
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
    
    }
    })
   

days_data_display.addEventListener("change", matching_days_update())
