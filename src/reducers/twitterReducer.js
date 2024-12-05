import {CHANGE_AVATAR, CHANGE_NAME, CHANGE_STATS} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state,user:{...state.user, name: action.payload || state.user.name}};
        case CHANGE_STATS: {
            const newStats ={...state.stats};
            const typeStats = action.payload.typeStats;

            const count = newStats[typeStats];
            const sum = action.payload.sum;

            return {...state,stats:{...state.stats,
                    [typeStats]:sum<0&&count<Math.abs(sum)?0:count+sum }};

        }


        default:
            return state;
    }
}