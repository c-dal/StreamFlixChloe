import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function QuestionCard({ question, selected, onSelect }) {
    const [selectedAnswer, setSelectedAnswer] = useState(selected || null);
    const options = question.options;

    const handleChange = (answer) => {
        setSelectedAnswer(answer);
        onSelect(question.id - 1, answer);
    };

    return (
        <div className="q-card card">
            <h3>{question.question}</h3>
            <div className="answers">
                <form action="/action_page.php">
                    {options.map(
                        (answer, idx) => (
                            <div className="form-check" key={idx}>
                                <input className="form-check-input" 
                                       type="radio"
                                       name={`q-${question.id}`} 
                                       id={`answer-${idx}`} 
                                       checked={selectedAnswer === answer}
                                       onChange={() => handleChange(answer)} />
                                <label className="form-check-label" htmlFor={`answer-${idx}`}>
                                    {answer}
                                </label>
                            </div>
                            )
                        )
                    }
                </form>
            </div>
            
        </div>
    );
};

export default QuestionCard;