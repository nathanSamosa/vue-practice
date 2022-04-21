const state = {
    links: [
        {
            id: 1,
            title: 'Twitter homepage',
            logo: 'twitter',
            path: 'https://www.twitter.com',
        },
        {
            id: 2,
            title: 'Youtube homepage',
            logo: 'youtube',
            path: 'https://www.youtube.com',
        }
    ],
    isEditMode: false,
    tooltip: {
        model: "",
        id: null,
    }
};

const getters = {
    allLinks: state => state.links,
    isEditMode: state => state.isEditMode,
    tooltip: state => state.tooltip
};

const actions = {
    updateLink: ({commit}, req) => {
        const linkIdx = state.links.findIndex(link => link.id === req.id)
        commit('updateLink', {linkIdx, req})
    },
    deleteLinkById: ({commit}, id) => {
        const newLinks = state.links.filter(link => link.id !== id)
        commit('deleteLinkById', newLinks)
    },
    toggleEditMode: ({commit}) => commit('toggleEditMode', !state.isEditMode),
    updateTooltip: ({commit}, req) => commit('updateTooltip', req),
};

const mutations = {
    updateLink: (state, newLink) => {
        const { linkIdx, req } = newLink
        state.links[linkIdx] = req;
    },
    deleteLinkById: (state, newLinks) => state.links = newLinks,
    toggleEditMode: (state, isEditMode) => state.isEditMode = isEditMode,
    updateTooltip: (state, req) => state.tooltip = { ...state.tooltip, ...req },
};

export default {
    state,
    getters,
    actions,
    mutations
}