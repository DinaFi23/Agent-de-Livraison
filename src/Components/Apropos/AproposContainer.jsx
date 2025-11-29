import { AproposImage } from "./AproposImage"
import { AproposText } from "./AproposText"
import './AproposContainer.css'

export function AproposContainer() {
 
  return (
    <>
        <div className="container" >
            <AproposText />
            < AproposImage />
        </div> 
    </>
  )
}