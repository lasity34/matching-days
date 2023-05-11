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
 

function daysTemplate() {
  const template_source = document.querySelector("#days_template").innerHTML;
  const days_template = Handlebars.compile(template_source);
  const days_data_display = document.querySelector(".days_container");

  const daysData = {
    different_days: daysOfWeek.map((day) => {
      let selectedClass = "";
      if (
        day === daysInstance.get_day_class(daysInstance.get_date_value_1()) &&
        day === daysInstance.get_day_class(daysInstance.get_date_value_2())
      ) {
        selectedClass = "same_day";
      } else if (day ===  daysInstance.get_day_class(daysInstance.get_date_value_1())) {
        selectedClass = "day1";
      } else if (day === daysInstance.get_day_class(daysInstance.get_date_value_2())) {
        selectedClass = "day2";
      }

      return { day, selected: selectedClass };
    }),
  };

  const daysDataHTML = days_template(daysData);
  days_data_display.innerHTML = daysDataHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  daysTemplate();
});

first_date_input.addEventListener("change", daysTemplate);
second_date_input.addEventListener("change", daysTemplate);
