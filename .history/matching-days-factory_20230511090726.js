
let first_date_value = 0;
let second_date_value = 0
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function matching_days() {

    function set_date_value(input1, input2) {

        first_date_value = input1;
        second_date_value = input2

    }

 

    function get_day_filtered() {
        const date1 = new Date(first_date_value)
        const date2 = new Date(second_date_value)
       
        const get_day_1 = daysOfWeek[date1.getDay()];
        const get_day_2 = daysOfWeek[date2.getDay()];
       

       const filtered_day = daysOfWeek.filter(day => {
            return day === get_day_1 ? "day1" : day === get_day_2 ? "day2" : "" 
        })

        return filtered_day
    }

   

    return {
        set_date_value,
        get_day_filtered
        
    }
}