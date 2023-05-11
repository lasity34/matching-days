
const first_date_input  = document.querySelector("#first_date")
const second_date_input = document.querySelector("#second_date")
const days_data_display = document.querySelector(".days_container")

const daysInstance = matching_days()

function matching_days_update() {

    daysInstance.set_date_value(first_date_input.value, second_date_input.value)
    daysTemplate(
        console.log(daysInstance.get_day_filtered())
    )

   
}

function daysTemplate() {
    const template_source = document.querySelector("#days_template").innerHTML
    const days_template = Handlebars.compile(template_source)
    const days_data_display = document.querySelector(".days_container")

    const daysData = {
        different_days: [
            { day: "Monday", selected: daysInstance.get_day_filtered() },
            { day: "Tuesday", selected: daysInstance.get_day_filtered()},
            { day: "Wednesday", selected:daysInstance.get_day_filtered()},
            { day: "Thursday", selected: daysInstance.get_day_filtered()},
            { day: "Friday", selected: daysInstance.get_day_filtered()},
            { day: "Saturday", selected: daysInstance.get_day_filtered()},
            { day: "Sunday", selected:daysInstance.get_day_filtered()}
        ]
    }



    const daysDataHTML = days_template(daysData)

    days_data_display.innerHTML = daysDataHTML

}


document.addEventListener("DOMContentLoaded", function() {
    daysTemplate()
    
    })
   

    days_data_display.addEventListener("change", matching_days_update())

