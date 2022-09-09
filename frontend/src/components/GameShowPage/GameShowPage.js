import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MiniNavBar from "../MiniNavBar";
import NavBottomBar from "../NavBottomBar";


function GameShowPage () {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    useEffect(() => {

    }, []);
    
    return (
        <>
            <MiniNavBar />
                <div className="game-show-page-container">
                    {/* <h1>{game.title}</h1> */}
                    <div className="game-show-page-title-content">
                        <div className="game-show-page-media-container">
                            <h2>media</h2>
                        </div>
                        <div className="game-show-page-title-details">
                            <h2>details</h2>
                        </div>

                        <div className="game-show-page-media-scrolly">
                            <h2>scrolly box with extra text in order to check and see if my overflow is working the way that it is supposed to
                                but idk if I am going to be able to fill out enough text to make it scroll.
                            </h2>
                        </div> 
                    </div>
                    <div className="game-show-page-reviews-container">

                    </div>
                </div>
        </>
    )

}

export default GameShowPage;