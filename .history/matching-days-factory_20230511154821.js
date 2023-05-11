function matching_day() {
  let date_input_value_1 = 0;
  let date_input_value_2 = 0
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  

  function set_date_value_1(input) {
    date_input_value_1 = input
  }
  
  function set_date_value_2(input) {
    date_input_value_2 = input
  }

  function get_date_value_1() {
    return date_input_value_1
  }

  function get_date_value_2() {
    return date_input_value_2
  }

  function is_same_day() {
    if (get_date_value_1() === get_date_value_2()) {
        return true
    } else {
        return false
    }
  }

  function get_day_class(dateValue) {
    const date = new Date(dateValue);
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    return dayOfWeek;
  }

  function get_filter_day() {
    daysOfWeek.map((day) => {
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
      })
  }
   
  

 

  return {
    set_date_value_1,
    set_date_value_2,
    get_date_value_1,
    get_date_value_2,
    is_same_day,
    get_day_class,
    get_filter_day
  };
}
