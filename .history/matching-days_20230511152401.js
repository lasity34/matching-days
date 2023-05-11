const first_date_input = document.querySelector("#first_date");
const second_date_input = document.querySelector("#second_date");
const days_data_display = document.querySelector(".days_container");
const change_date = document.querySelector(".input_box");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const daysInstance = matching_day()



 daysInstance.set_date_value_1(first_date_input.value)
 daysInstance.set_date_value_2(second_date_input.value)
 daysInstance.get_day_data()

function daysTemplate() {
  const template_source = document.querySelector("#days_template").innerHTML;
  const days_template = Handlebars.compile(template_source);
  const days_data_display = document.querySelector(".days_container");

  const daysData =  daysInstance.get_day_data()
  

  const daysDataHTML = days_template(daysData);
  days_data_display.innerHTML = daysDataHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  daysTemplate();
});

first_date_input.addEventListener("change", daysTemplate);
second_date_input.addEventListener("change", daysTemplate);
