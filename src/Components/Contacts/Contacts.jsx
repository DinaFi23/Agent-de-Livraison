import { Form } from "./form";
import { Reseau } from "./Reseau";
import './contacts.css'

export function Contacts() {
 
  return (
    <>
        <div className="contacts-container">
            <Form/>
            <Reseau/>
        </div>   
    </>
  )
}