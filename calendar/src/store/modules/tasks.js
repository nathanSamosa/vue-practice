const state = {
    tasks: [
        {
            id: 1,
            title: "task one",
            date: {
                Y: 2022, M: 3, D: 17, T: 1800
            }
        },
        {
            id: 2,
            title: "task two",
            date: {
                Y: 2022, M: 3, D: 15, T: 700
            }
        },
        {
            id: 3,
            title: "task three",
            date: {
                Y: 2022, M: 3, D: 3, T: 1430
            }
        },
    ]
}

const getters = {
    allTasks: state => state.tasks
}

export default {
    state,
    getters,
    mutations: {},
    actions: {}
}