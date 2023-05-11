
const first_date_input  = document.querySelector("#first_date")
const second_date_input = document.querySelector("#second_date")
const days_data_display = document.querySelector(".days_box")

const daysInstance = matching_days()

function matching_days_update() {

    daysInstance.set_date_value(first_date_input.value, second_date_input.value)
    daysTemplate(daysInstance.get_day().dayOfWeek, daysInstance.get_day.dayOfWeek1)

    console.log(daysInstance.get_day().dayOfWeek)
}

function daysTemplate(day1, day2) {
    const template_source = document.querySelector("#days_template").innerHTML
    const days_template = Handlebars.compile(template_source)
    const days_data_display = document.querySelector(".days_container")

    const daysData = {
        different_days: [
            { day: "Monday", selected: day1 === "Monday" ? "day1" : day2 === "Monday" ? "day2" : null },
            { day: "Tuesday", selected: day1 === "Tuesday" ? "day1" : day2 === "Tuesday" ? "day2" : null},
            { day: "Wednesday", selected: day1 === "Wednesday" ? "day1" : day2 === "Wednesday" ? "day2" : null},
            { day: "Thursday", selected: day1 === "Thursday" ? "day1" : day2 === "Thursday" ? "day2" : null},
            { day: "Friday", selected: day1 === "Friday" ? "day1" : day2 === "Friday" ? "day2" : null},
            { day: "Saturday", selected: day1 === "Saturday" ? "day1" : day2 === "Saturday" ? "day2" : null},
            { day: "Sunday", selected: day1 === "Sunday" ? "day1" : day2 === "Sunday" ? "day2" : null}
        ]
    }



    const daysDataHTML = days_template(daysData)

    days_data_display.innerHTML = daysDataHTML

}


document.addEventListener("DOMContentLoaded", function() {
    daysTemplate()
    
    })
   

days_data_display.addEventListener("change", matching_days_update())

