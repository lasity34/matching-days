const first_date_input = document.querySelector("#first_date");
const second_date_input = document.querySelector("#second_date");
const days_data_display = document.querySelector(".days_container");
const change_date = document.querySelector(".input_box")
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


function matching_days_update() {
  daysTemplate();
}

function get_day_class(dateValue) {
    const date = new Date(dateValue);
    const dayOfWeek = daysOfWeek[date.getDay()];

    return dayOfWeek;
  }



function daysTemplate() {
  const template_source = document.querySelector("#days_template").innerHTML;
  const days_template = Handlebars.compile(template_source);
  const days_data_display = document.querySelector(".days_container");

  const daysData = {
    different_days: daysOfWeek.map((day) => {
      let selectedClass = "";
      if (day === daysInstance.get_day_class(first_date_input.value) && day === daysInstance.get_day_class(second_date_input.value)) {
        selectedClass = "same_day";
      } else if (day === daysInstance.get_day_class(first_date_input.value)) {
        selectedClass = "day1";
      } else if (day === daysInstance.get_day_class(second_date_input.value)) {
        selectedClass = "day2"
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

first_date_input.addEventListener("change", matching_days_update);
second_date_input.addEventListener("change", matching_days_update);

