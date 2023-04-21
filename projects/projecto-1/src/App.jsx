import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App(){
    // const formattedUsername = <span>@hpola</span>
    const eaSports = {username:'easportsfifa', name: 'EAFC 24'}
    return(
        <section className="App">
            <TwitterFollowCard username="diegoalonsonm" name="Diego Naranjo"/>
            <TwitterFollowCard username="djmariio" name="DjMaRiiO"/>
            <TwitterFollowCard {...eaSports}>
            </TwitterFollowCard>
            <TwitterFollowCard username="ye" name="Ye"/>
        </section>
    )
}