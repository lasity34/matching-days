


document.addEventListener("DOMContentLoaded", function() {

    const template_source = document.querySelector("#days_template").innerHTML
    const days_template = Handlebars.compile(template_source)
    const days_data_display = document.querySelector("date_input_container")

    const daysData = {

    }


    const daysDataHTML = days_template(daysData)

    days_data_display.innerHTML = daysDataHTML

})