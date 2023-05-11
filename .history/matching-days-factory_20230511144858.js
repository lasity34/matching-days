function matching_day() {
  let date_input_value_1 = 0;
  let date_input_value_2 = 0

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

  return {
    set_date_value_1,
    set_date_value_2
  };
}
