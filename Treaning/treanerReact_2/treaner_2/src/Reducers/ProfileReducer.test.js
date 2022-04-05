import {setProfile} from "./ProfileReducer";


it('the profile exists', () => {
    let state = {
        Profile: null
    }

    let action = setProfile({name: "Dima", age: 0})
    let newState = setProfile(state, action)


    expect(newState.Profile).toBe({name: "Dima", age: 0})
})