function matching_day() {
  let date_input_value_1 = 0;
  let date_input_value_2 = 0

  function set_date_value_1(input) {
    date_input_value_1 = input
  }
  
  function set_date_value_2(input) {
    date_input_value_2 = input
  }


  return {
    set_date_value_1,
    set_date_value_2
  };
}
