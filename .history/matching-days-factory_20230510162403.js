
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
       
        const dayOfWeek = daysOfWeek[date1.getDay()];
        const dayOfWeek2 = daysOfWeek[date2.getDay()];
       

       const filtered_day = daysOfWeek.map(day => {
            return day === dayOfWeek ? "day1" : day === dayOfWeek2 ? "day2" : null 
        })

        return filtered_day
    }

   

    return {
        set_date_value,
        get_day_filtered
        
    }
}