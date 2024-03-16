import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  
  const QnA = [
    { 
      question:"In Castle in the Sky, what is the name of the floating city that the characters are searching for?",
      answer: "Laputa",
      passingkeyword: "Laputa"
    },
    {
      question:"Which Studio Ghibli movie was inspired by the children’s book The Borrowers, a story about tiny people living secretly in the homes of humans?",
      answer:"The Secret World of Arrietty",
      passingkeyword: "Arrietty"
    },
    {
      question:"In Kiki’s Delivery Service, what kind of animal is Kiki’s familiar, Jiji?",
      answer:"A cat",
      passingkeyword:"cat"
    },
    {
      question:"Which Studio Ghibli movie is about a boy who befriends a fish with a human face?",
      answer:"Ponyo",
      passingkeyword: "ponyo"
    },
    {
      question:"In Spirited Away, what does the main character Chihiro’s name mean in Japanese?",
      answer:"A thousand springs",
      passingkeyword: "thousand springs"
    },
    {
      question:"Which Studio Ghibli movie tells the story of a man who dreams of flying and becomes an aircraft designer?",
      answer:"The Wind Rises",
      passingkeyword: "wind rises"
    },
    {
      question:"In Howl’s Moving Castle, what does Howl do for a living?",
      answer:"He's a wizard",
      passingkeyword: "wizard"
    },
    {
      question:"Who is the main villain in Princess Mononoke?",
      answer:"Lady Eboshi",
      passingkeyword: "eboshi"
    },
    {
      question:"What are the giant insects called that Nausicaa communicates with?",
      answer:"Ohmu",
      passingkeyword:"ohmu"
    },
    {
      question:"How many legs does the Catbus have in My Neighbour Totoro?",
      answer:"12",
      passingkeyword:"12"
    },
  ]

  const [currentQuestionIndex, setQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState('')
  const [answerState, setAnswerState] = useState(null)

  const nextCard = () => {
    if(currentQuestionIndex < QnA.length - 1){
      setQuestion(currentQuestionIndex + 1);
      setIsFlipped(false)
      setUserAnswer("")
      setAnswerState(null)
    }
  }

  const prevCard = () => {
    if(currentQuestionIndex >= 1){
      setQuestion(currentQuestionIndex - 1);
      setIsFlipped(false)
      setUserAnswer("")
      setAnswerState(null)
    }
    
  }

  const shuffleCard = () => {
    const randomIndex = Math.floor(Math.random() * QnA.length);
    setQuestion(randomIndex);
    setIsFlipped(false)
    setUserAnswer("")
    setAnswerState(null)
  }

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
    setAnswerState(null)
  }

  const answerValidation = () => {
    if(userAnswer.toLowerCase().includes(QnA[currentQuestionIndex].passingkeyword.toLowerCase())) {
      setAnswerState(true)
    } else {
      setAnswerState(false)
    }
  }

  return (
    <div className = "App">
      <div className = "container">
        <h1>Ghibli's Academic Weapon</h1>
        <h2>Test your Ghibli Studio movie's knowledge here!</h2>
        <h3>Number of Cards: {QnA.length}</h3>
        <Card 
        question={QnA[currentQuestionIndex].question} 
        answer={QnA[currentQuestionIndex].answer} 
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        />
        <br></br>
        
        <div className='container2'>
          <div className='input-container'>
            <input type='text' className={answerState === true ? "correct" : answerState === false ? "incorrect" : ""} value={userAnswer} onChange={handleInputChange} placeholder='Your answer'></input>
            <button onClick={answerValidation}>Submit</button>
          </div>
          <div className='button-container'>
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
            <button onClick={shuffleCard}>Shuffle</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
