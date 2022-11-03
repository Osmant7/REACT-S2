// creer une page : users
// créer un form avec 2 champs : "firstname" et "lastname" permettan d'ajouter des utilisateurs dans un tableau de données
// instancier un  composant "User" pour chaque utilisateur qui affichera le nom et le prenom
// dans le composant "User" afficher un bouton edit permmettant d'afficher un formulaire ( pour chaque utilisateur)
// lorsque le formulaire du composant "user" s'affiche, modifier la couleur de fond de celui ci par une couleur aleatoire

import React, {useState, useEffect} from 'react'
import User from '../components/LifeCycle/User'

const Users = () => {

    const [inputFirstname, setInputFirstName] = useState('')
    const [inputLastname, setInputLastName] = useState('')
    const [usersArray, setUsersArray] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        setUsersArray([...usersArray, inputFirstname + ' ' + inputLastname])
        
        // dans l'ideal enregistrer les données dans un tableau en concaténant comme en haut nest pas bon, voir ici :
        // setUsersArray([...users, {
            // firstname: inputFirstname,
            // lastname: inputLastname, 
       //  }])
        setInputLastName('')
        setInputFirstName('')
        console.log();
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setInputFirstName(e.target.value)} value={inputFirstname} placeholder="firstname" />
            <input type="text" onChange={e => setInputLastName(e.target.value)} value={inputLastname} placeholder="lastname" />
            <button type="submit"> Créer nouvel utilisateur </button>
        </form>

        {/* <User utilisateurs={}/> */}

        {
            usersArray.map((use, i) => (
                <div style={{margin:"1rem"}}>
                    <User key={i} utilisateur={use}/>
                </div> 
            ))
        }

    </div>
  )
}

export default Users