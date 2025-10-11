import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import QuizHeader from "../components/QuizHeader";

function QuizHome() {
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate("/QuizQuestions");
    };
    return (
        <>
            <QuizHeader />
            <div id="quiz">
                <h1>Quiz cinéma - Testez vos connaissances !</h1>
                <h2>10 questions sur l'univers du cinéma</h2>
                <p>
                    Testez vos connaissances à l'aide de ce quiz interactif de 10 questions, 
                    pour montrer à vos amis que vous êtes vraiment le roi du cinéma
                </p>
                <p>
                    <button className="btn btn-primary" onClick={startQuiz}>C'est parti !</button>

                </p>
                
            </div>
            <Footer />
        </>
    );
};

export default QuizHome;