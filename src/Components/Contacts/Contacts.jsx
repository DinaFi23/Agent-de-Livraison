import { Form } from "./form";
import { Reseau } from "./Reseau";
import './contacts.css'

export function Contacts() {
 
  return (
    <>
        <div className="contacts-container" id="Ccontainer">
            <Form/>
            <Reseau/>
        </div>   
    </>
  )
}