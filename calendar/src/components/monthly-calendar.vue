<template>
    <div id="monthly-grid">
        <div
            class="day-header"
            v-for="day in getWeekDays(locale)"
            :key="day"
        >
            {{day}}
        </div>
        <div
            class="day-cell"
            v-for="day in calendar"
            :key="day"
        >
            {{day.monthOffset}}
        </div>
    </div>
</template>

<script>
    import dateCalculator from '../mixins/dateCalculator'
    import calendarConstructor from '../mixins/calendarConstructor'

    export default {
        name: "MonthlyCalendar",
        mixins: [dateCalculator, calendarConstructor],
        data() {
            return {
                locale: 'en-UK',
                viewedYear: null,
                viewedMonth: null,
                calendar: [],
            }
        },
        methods: {
            goToToday() {
                this.viewedYear = this.currentYear;
                this.viewedMonth = this.currentMonth;
            },
        },
        created() {
            this.goToToday()
        },
        watch: {
            viewedMonth() {
                if (this.viewedYear) {
                    this.calendar = this.constructCalendar(this.viewedYear, this.viewedMonth)
                    console.log(this.calendar)
                    console.log(this.getWeekDays('en-UK'))
                }
            },
        }
    }
</script>

<style>
    #monthly-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-rows: 50px;
    }
    #monthly-grid > div {
        border: 1px solid grey;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>