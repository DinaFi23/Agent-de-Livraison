import './Form.css'

export function Form() {
 
  return (
    <>
        <div className="formulaire">
            <input type="text" placeholder='Entrez ici votre nom'/>
            <input type="email" placeholder='Votre email'/>
            <textarea  placeholder='et votre message'></textarea>
            <button> Envoyer </button>
        </div> 
    </>
  )
}
