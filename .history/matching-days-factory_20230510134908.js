
let first_date_value = 0;
let second_date_value = 0



function matching_days() {

    function set_date_value(input1, input2) {

        first_date_value = input1;
        second_date_value = input2

    }

    function get_date_value() {
        const dateObj = {
            first_date_value,
            second_date_value
        }
        return dateObj
    }

    return {
        set_date_value,
        get_date_value
    }
}