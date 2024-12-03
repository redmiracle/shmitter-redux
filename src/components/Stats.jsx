import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeFollower, changeFollowing} from "../actions/userAction.js";

const Stats = () => {
    const {name}=useSelector(state=>state.user)
    const {followers,following} = useSelector(state=>state.stats)
    const dispatch = useDispatch();
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeFollower(5))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollower(-10))
                    }}
                >
                    Followers: {followers}
                </div>
                <div
                    onClick={() => dispatch(changeFollowing(5))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowing(-10));
                    }}
                >
                    Following: {following}
                </div>
            </div>
        </div>
    );
};

export default Stats;