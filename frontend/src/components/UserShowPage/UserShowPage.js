import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser, getUser, updateUser } from "../../store/users";
import { getReviews, fetchReviews } from "../../store/reviews";
import { fetchGames } from "../../store/games";
import { restoreSession, setCurrentUser, storeCurrentUser } from "../../store/session"
import userIcon from "../../assets/user.png";
import icon4 from "../../assets/4.jpg"; 
import icon5 from "../../assets/5.jpg";
import icon7 from "../../assets/7.jpg";
import icon19 from "../../assets/19.jpg";
import icon20 from "../../assets/20.jpg"; 
import icon21 from "../../assets/21.jpg"; 
import icon23 from "../../assets/23.jpg";
import icon24 from "../../assets/24.jpg";
import icon27 from "../../assets/27.jpg";
import icon28 from "../../assets/28.jpg";
import icon29 from "../../assets/29.jpg";
import icon30 from "../../assets/30.jpg";
import icon31 from "../../assets/31.jpg";
import background1 from "../../assets/9.jpg";
import background2 from "../../assets/10.jpg";
import background3 from "../../assets/11.jpg";
import background4 from "../../assets/12.jpg";
import background5 from "../../assets/13.jpg";
import background6 from "../../assets/14.jpg"; 
import background7 from "../../assets/17.jpg";


// going to have to make buttons for each picture, 
// set up an object with the URL of all the pictures
// buttons are going to send to back end updated URL
// display is going to have to show the img || default

function UserShowPage () {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const { userId } = useParams();
    const reviews = useSelector(state => state.reviews)
    const games = useSelector(state => state.games)

    const user = useSelector(getUser(userId));

    const [showEdit, setShowEdit] = useState(false);
    const [showEditButton, setShowEditButton] = useState(true)
    const [userName, setUsername] = useState();
    const [userBio, setUserBio] = useState();
    const [currentIcon, setCurrentIcon] = useState();

    if (currentIcon === "" ) {
        // console.log(currentIcon, "its a string!")
        setCurrentIcon(0)
    }

    useEffect(() => {
        if (user) {
            setCurrentIcon(Number(user.profilePicUrl))
            // console.log(currentIcon + 4, "in the use effect")
        }
        if (sessionUser) {
            setShowEditButton(sessionUser.id === Number(userId))
        }
    }, [user])

    const profileIcon = [
        userIcon,
        icon4,
        icon5,
        icon7,
        icon19,
        icon20,
        icon21, 
        icon23, 
        icon24, 
        icon27,
        icon28,
        icon29,
        icon30,
        icon31
    ]

    const backgroundArr = [
        background1,
        background2,
        background3,
        background4,
        background5,
        background6,
        background7
    ]

    useEffect(() => {
        dispatch(fetchUser(userId));
        dispatch(fetchReviews());
        dispatch(fetchGames());
    }, []);

    
    const handleSubmit = (e) => {
        // console.log(user)
        e.preventDefault();
        let newUserData

        if (userName) {
            newUserData = {
                id: user.id,
                email: user.email,
                username: userName,
                bio: userBio,
                profilePicUrl: currentIcon
            }
        } else {
            newUserData = {
                id: user.id,
                email: user.email,
                username: user.username,
                bio: userBio,
                profilePicUrl: currentIcon
            }
        }

        console.log(newUserData)
        dispatch(updateUser(newUserData))
        setShowEdit(false);
        storeCurrentUser(newUserData)
        dispatch(setCurrentUser(newUserData))
    }

    if (!user || !reviews || !games) return null;

    // console.log(Object.values(reviews), "reviews print")
    // console.log(sessionUser.id, userId)
    return (
        <>
            <div className="user-show-page-container">
                <div className="show-page-content-container">
                    <img className="profile-icon" src={profileIcon[currentIcon]} />
                    <h2 className="text username-text">{user.username}</h2>
                    <p className="text user-bio">{user.bio}</p>
                    {showEditButton && <button className="show-edit-profile-button" onClick={() => setShowEdit(!showEdit)}>Toggle Edit Form</button>}
                    {showEdit && 
                        <>
                        <div className="edit-modal">
                            <label className="text">Edit Profile</label>
                            <form onSubmit={handleSubmit}>
                                {sessionUser.username !== "Demo-lition" && <input type={'text'} value={userName} placeholder='username' onChange={(e) => setUsername(e.target.value)} />}
                                <input type={'textarea'} value={userBio} placeholder='put bio here' onChange={(e) => setUserBio(e.target.value)} />
                                <button type="submit">Submit Changes</button>
                            </form>
                        </div>
                        
                        <div className="img-selector-container">
                            {profileIcon.map((icon, idx) => (
                                <button value={idx} className={`profile-img-button`} onClick={(e) => setCurrentIcon(e.target.value)}>
                                    <img className="profile-img-switch" src={icon} />
                                </button>
                            ))}
                        </div>
                        </>
                    }

                    <div className="user-show-reviews-container">
                    <h3 className="text">User Reviews</h3>
                        {Object.values(reviews).map((review) => (
                            <>
                                {Number(review.reviewerId) === Number(userId) && 
                                    <div className="profileReview">
                                        {/* <img src={games.photourls} /> */}
                                        {games[review.gameId] && <p className="prof-rev-text">{`Review of ${games[review.gameId].name} by ${user.username}: `}{review.body}</p>}
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserShowPage;