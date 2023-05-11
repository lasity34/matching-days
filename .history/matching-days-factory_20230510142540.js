
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

    function get_day() {
        const date1 = new Date(first_date_value)
        const date2 = new Date(second_date_value)
        console.log(date1)
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayOfWeek = daysOfWeek[date1.getDay()];
        const dayOfWeek2 = daysOfWeek[date2.getDay()];
        console.log(dayOfWeek)
        const daysObj = {
            dayOfWeek,
            dayOfWeek2
        }

        return daysObj
    }

    return {
        set_date_value,
        get_date_value,
        get_day
    }
}