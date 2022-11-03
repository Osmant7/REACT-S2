import React, {useState} from 'react'
import Animal from '../components/LifeCycle/Animal'

const LifeCycle = () => {

    const [toggle, setToggle] = useState(false)
    const [fontColor, setFontColor] = useState('black')

  return (
    <div>
        <h1>Cycles de vie</h1>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <button onClick={() => setFontColor(fontColor === 'black' ? 'blue' : 'black')}>Texte color</button>

        {/* {
            toggle === true ? (
                <Animal name="Girafe" width="200px"/>
                
            ) : (
                'Rien'
            )
        } */}

{/* // on peut également vérifier si cest true de cette maniere ( juste toggle ): */}
        
        {
            toggle &&
                <>
                    <Animal name="Girafe" width={200} fontColor={fontColor}/>
                    {/* <Animal name="Girafe" width={200} fontColor={fontColor}/>
                    <Animal name="Girafe" width={200} fontColor={fontColor}/> */}
                </>
        }


    </div>
  )
}

export default LifeCycle