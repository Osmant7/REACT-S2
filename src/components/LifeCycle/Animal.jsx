import React, {useEffect, useState} from 'react'

const Animal = ({name, width, fontColor}) => {

    const [color, setColor] = useState('purple')
    // execute la fonction passé en premier parametre quand on instancie le composant
    // on instancie en passant dans le parametre const Animal, les propriété  et dans le LifeCycle.jsx on met les valeur voulu
    // useEffect permet d'executer du code dans different cycle de vie

    useEffect(() => {
        console.log(name);

        if(name === 'Girafe'){
            setColor('orange')
        }
    }, [])  // on execute 1 seul fois ce code a l'instanciation de ce dernier

    // // useEffect(() => {
    //     console.log('Composant Maj')
    // })   ca permet d'éxecuter du code a chaque cycle de vie, a chaque mise a jour 


    useEffect(() => {
        console.log("Prop fontColor modifé");
    }, [fontColor])     
    // permet d'executer que lors de la modification / maj du prop color

    useEffect(() => {
        return () => {
            console.log('Composant détruit');
        }
    }, []) // le return s'executera uniquement quandd la condition devient fausse ( on a utilisé un toggle, donc quand la condition devient vrai alors l'instanciation et mise en route mais dès lors que le toggle devient fausse ( on reclique sur le button ) alors la valeur devient fausse et ce code s'execute ( cest la destruction ))

  return (
    <div style={{background: color, width: width, color: fontColor}}>{name}</div>
  )
}

export default Animal