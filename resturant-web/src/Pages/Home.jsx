import Hero from "../Components/Hero"
import Contact from "../Components/Contact"
import Ourstory from "../Components/Ourstory"
import Menuhightlight from "../Components/Menuhightlight"
import SpecialsEvents from "../Components/SpecialsEvents"

export default function Home(){
    return(
        <div>
        <Hero/>
        <Ourstory/>
        <Menuhightlight/>
        <SpecialsEvents/>
        <Contact/>
        </div>
    )
}