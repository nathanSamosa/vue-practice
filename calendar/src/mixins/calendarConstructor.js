import dateCalculator from './dateCalculator';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            calendar: [],
        }
    },
    mixins: [dateCalculator],
    methods: {
        offsetCalendar(year, month, date) {
            const firstOfMonth = this.dayOfWeek(year, month, date)
            console.log("firstOfMonth", firstOfMonth)
            return firstOfMonth ? Array(firstOfMonth).fill({monthOffset: -1}) : [];
        },
        findTodaysTasks(date) {
            return this.allTasks.filter(task => {
                const todaysDate = `${this.viewedYear}-${this.viewedMonth}-${date}`
                const taskDate =`${task.date.Y}-${task.date.M}-${task.date.D}`
                return todaysDate === taskDate;
            })
        },
        addDate(date) {
            const day = {
                date: date,
                tasks: this.findTodaysTasks(date)
            }
            this.calendar.push(day)
            return date + 1
        },
        constructCalendar(year, month) {
            console.log(year, month)
            let date = 1;
            this.calendar = this.offsetCalendar(year, month, date)

            const monthLength = this.daysInMonth(year, month, date)
            console.log("monthLength", monthLength)
            while (date <= monthLength) date = this.addDate(date)

            const lastOfMonth = this.dayOfWeek(year, month, monthLength)
            console.log("lastOfMonth", lastOfMonth)
            this.calendar.push(...Array(6 - lastOfMonth).fill({monthOffset: 1}));
            return this.calendar
        }
    },
    computed: {
        ...mapGetters(['allTasks'])
    }
}