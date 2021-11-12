import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"

function Body(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <section className={`${theme}-theme`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia est ante, vitae tempor diam vestibulum at. Curabitur finibus nisl nec ultricies posuere. Sed ultricies elementum dictum. Nulla a ligula lacus. Morbi tincidunt porta nisi nec gravida. Maecenas lobortis vel dolor auctor tincidunt. Mauris vitae purus felis. Aliquam dapibus sapien rhoncus sagittis elementum. Nunc metus nulla, fermentum a varius quis, porta ac nulla. Donec dignissim sollicitudin tempus.
        </section>
    )    
}

export default Body