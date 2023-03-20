const state = {
    game1:[
        {
            level1: false,
            level2: false,
            allDone: false
        }
    ],
    game2:[
        {
            level1: false,
            level2: false,
            allDone: false
        }
    ]
}

const mutations = {

}

const actions = {

}

const getters = {
    game1: (state) => {
        return state.game1
    },
    game2: (state) => {
        return state.game2
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}