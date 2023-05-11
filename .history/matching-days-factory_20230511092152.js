



function matching_days() {
    let first_date_value = 0;
let second_date_value = 0
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    function set_date_value(input1, input2) {

        first_date_value = input1;
        second_date_value = input2

    }

 

    function get_day_filtered(dateValue) {
        const date = new Date(dateValue)
        const dayOfWeek = daysOfWeek[date.getDay()]

        return dayOfWeek
    }

   

    return {
        set_date_value,
        get_day_filtered
        
    }
}