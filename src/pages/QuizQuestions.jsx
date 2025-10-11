import Footer from "../components/Footer";
import QuestionCard from "../components/QuestionCard";
import QuizHeader from "../components/QuizHeader";
import { quizQuestions } from "../data/quizQuestions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnswerCard from "../components/AnswerCard";
import ProgressBar from "../components/ProgressBar";


function QuizQuestions() {
    const navigate = useNavigate();

    const [currentState, setCurrentState] = useState(0);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
    const saveAnswer = (questionIdx, selectedAnswer) => {
        const newAnswers = [...answers];
        newAnswers[questionIdx] = selectedAnswer;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert("Quiz terminé !");
            setCurrentState(1);
            setScore(calculateScore);
        }
    };

    const goToHome = () => {
        navigate("/");
    }

    const goToQuiz = () => {
        navigate("/QuizHome");
    }

    const question = quizQuestions[currentQuestionIndex];
    const totalQuestions = quizQuestions.length;

    const calculateScore = () => {
        return answers.reduce((score, userAnswer, qIdx) => {
            if (userAnswer === quizQuestions[qIdx].correctAnswer) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    const [score, setScore] = useState(0);

    return (
        <>
            <QuizHeader />
            <div id="quiz">
                <h1>Quiz cinéma - Testez vos connaissances !</h1>
                
                {currentState == 0 &&
                    <div>
                        <h2>10 questions sur l'univers du cinéma</h2>
                        <ProgressBar progress={((currentQuestionIndex+1)/totalQuestions)*100} />
                        <div>
                            <QuestionCard 
                                question={question}
                                selected={answers[currentQuestionIndex]}
                                onSelect={saveAnswer}
                            />
                        </div>
                        <p>
                            <button className="btn btn-primary" onClick={nextQuestion} disabled={answers[currentQuestionIndex] === null}>
                                {currentQuestionIndex < quizQuestions.length - 1 ? "Suivant" : "Voir les résultats"}
                            </button>
                        </p>
                    </div>
                }

                {currentState == 1 &&
                   <div>
                        <h2><span>Vos résultats : </span>
                        {
                            score <= 3 && <span>Vous devriez regarder plus de films ! 🎬</span>
                        }
                        {
                            score > 3 && score <= 6 && <span>Pas mal ! Un vrai amateur de cinéma 🍿</span>
                        }
                        {
                            score > 6 && score <= 8 && <span>Excellent ! Vous êtes un cinéphile confirmé 🌟</span>
                        }
                        {
                            score > 8 && <span>Parfait ! Vous êtes un expert du 7ème art ! 🏆</span>
                        }
                        </h2>
                        <h3>Vous avez obtenu {score}/10 !</h3>


                        <span>
                            {quizQuestions.map(
                                (q, idq) => (
                                    <>
                                        <AnswerCard question={q} correct={q.correctAnswer === answers[idq]} given={answers[idq]} />
                                    </>
                                )
                            )}
                        </span>

                        <span>
                            <button className="btn btn-primary" onClick={goToQuiz}>Recommencer quiz</button>
                            <br />
                            <button className="btn btn-primary" onClick={goToHome}>Retour à l'accueil</button>
                        </span>
                    </div> 
                }

            </div>
            <Footer />
        </>
    );
};

export default QuizQuestions;