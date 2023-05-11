document.addEventListener("DOMContentLoaded", function () {
const first_date_input = document.querySelector("#first_date");
const second_date_input = document.querySelector("#second_date");
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
 

function daysTemplate() {
  const template_source = document.querySelector("#days_template").innerHTML;
  const days_template = Handlebars.compile(template_source);
  const days_data_display = document.querySelector(".days_container");

  const daysData = {
    different_days: daysInstance.get_filter_day()
  };

  const daysDataHTML = days_template(daysData);
  days_data_display.innerHTML = daysDataHTML;
}


  daysInstance.set_date_value_1(first_date_input.value)
  daysInstance.set_date_value_2(second_date_input.value)
  console.log(daysInstance.get_day_class(daysInstance.get_date_value_1()))
  daysTemplate();
  first_date_input.addEventListener("change", daysTemplate);
  second_date_input.addEventListener("change", daysTemplate);
});

