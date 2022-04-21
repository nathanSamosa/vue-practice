const date = new Date();

export default {
    data() {
        return {
            currentYear: date.getFullYear(),
            currentMonth: date.getMonth(),
        }
    },
    methods: {
        daysInMonth(year, month) {
            return new Date(year, month + 1, 0).getDate()
        },
        dayOfWeek(year, month, day) {
            console.log(new Date(year, month, day))
            return (new Date(year, month, day).getDay() + 6) % 7;
        },
        dateOfMonth(year, month, day) {
            return new Date(year, month, day)
        },
        getWeekDays(locale) {
            return [...Array(7).keys()].map(i => 
                new Date(2024, 0, 1 + i).toLocaleDateString(locale, { weekday: 'long' })
            )
        }
    }
}