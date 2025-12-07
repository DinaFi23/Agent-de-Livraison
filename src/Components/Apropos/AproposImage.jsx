import './AproposImage.css'

export function AproposImage() {
   
    const Image = [
        '/livreur.png',
        '/trano1.png',
        '/trano2.png'
    ];

    
  return (
    <>
        <img src={Image[0]} alt="Un livreur" className='image'/>
    </>
  )
}