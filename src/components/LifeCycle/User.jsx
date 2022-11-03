import React, {useState, useEffect} from 'react'

const User = ({utilisateur}) => {

    const [toggle, setToggle] = useState(false)
    const [bgColor, setBgColor] = useState('white')

    useEffect(() => {
        console.log('Instancié !');
        toggle && setBgColor(getRandomColor())
    }, [toggle])
 // useEffect permettra d'appliquer si toggle est vrai alors la fonction getRandoColor ( qui donne couleur  aleatoir) se met en marche

    const getRandomColor = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

  return (
    <div style={{background:bgColor}}>
        <h3>{utilisateur}</h3>
        {/* <h1>Edit un utilisateur</h1> */}
        <button onClick={() => setToggle(!toggle)}>Edit</button>

        {
            toggle &&
                <div>
                    <form>
                        <input type="color" />
                        <button type="submit"> Valider la couleur de fond</button>
                    </form>
                </div>
        }
    </div>
  )
}

export default User