import MiniNavBar from "../MiniNavBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser, getUser } from "../../store/users";


function UserShowPage () {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const { userId } = useParams();

    const user = useSelector(getUser(userId));

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, []);

    return (
        <>
            <MiniNavBar />
            <div className="user-show-page-container">
                <h1>{}</h1>
            </div>
        </>
    );
}

export default UserShowPage;