export const state = () => ({
    isNavOpen: false,
    windowWidth: 0,
    active: 0
})

export const mutations = {
    toggleNav(state) {
        state.isNavOpen = !state.isNavOpen
    },
    setNavState(state, status) {
        state.isNavOpen = status
    },
    setWidth(state, width) {
        state.windowWidth = width
    },
    setActive(state, active) {
        state.active = active
    }
}