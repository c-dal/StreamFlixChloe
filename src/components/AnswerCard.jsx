import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function AnswerCard({question, correct, given}) {

    return (
        <div className="q-card card">
            <h2>{correct ? "✓" : "✗"} {question.question}</h2>
            <div className="answers">
                <ul>
                    {question.options.map((option, idx) => (
                    <li
                        key={idx}
                        style={{
                        color:
                            option === question.correctAnswer
                            ? "green"
                            : option === given ? "red" :
                            "inherit",
                        }}
                    >
                        {option}
                    </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default AnswerCard;