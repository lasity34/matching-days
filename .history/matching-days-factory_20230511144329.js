function matching_day() {
  let date_input_value_1 = 0;
  let date_input_value_2 = 0;

  function set_date_value(input, input2) {
    if (input) {
      return (date_input_value_1 = input);
    } else if (input2) {
      date_input_value_2 = input2;
    }
  }
  function get_date_value() {}

  return {
    set_date_value,
  };
}
