import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Icon from "../components/home/header/Icon";
import TextDescription from "../components/TextDescription";
import { TrendingUp, Users, BadgeCheck, Lightbulb } from 'lucide-react';

const Home = () => {
    const TrendingUpIcon = <TrendingUp className="flex text-primary items-center mx-auto" size={40} />;
    const UsersIcon = <Users className="flex text-primary items-center mx-auto" size={40} />;
    const BadgeCheckIcon = <BadgeCheck className="flex text-primary items-center mx-auto" size={40} />;
    const LightbulbIcon = <Lightbulb className="flex text-primary items-center mx-auto" size={40} />;

    const contentIcon = [
        {
            id: 0,
            icon: TrendingUpIcon,
            title: '+ 8 ans',
            subtitle: 'Expérience'
        },
        {
            id: 1,
            icon: UsersIcon,
            title: '100 %',
            subtitle: 'Engagés'
        },
        {
            id: 2,
            icon: BadgeCheckIcon,
            title: '100 %',
            subtitle: 'Réactifs'
        },
        {
            id: 3,
            icon: LightbulbIcon,
            title: '∞',
            subtitle: 'Projets innovants'
        },
    ]

    const contentDescription = [
        {
            id: 0,
            tag: 'Qui sommes-nous ?',
            title: 'L’Histoire de trois femmes',
            description: 'Tous Albatros, c’est d’abord l’histoire de trois femmes qui s’associent pour créer une méthode croisant leurs différentes spécialités : l’accompagnement social, l’animation socio-éducative et le coaching.\n\nParce que construire son futur implique de comprendre sa propre histoire. Tous Albatros conçoit des projets visant à transmettre aux jeunes des clefs d’introspection et de projection.\n\nL’association utilise tous les outils nécessaires au développement de l’autodétermination, de l’épanouissement et de la capacité d’agir des adolescents.'
        }
    ]

    return (
        <div>
            <Navbar />
            <div className="relative">
                <div className="flex">
                    <img src={require('../assets/images/home/background_header.png')} className="w-full h-full top-0" alt="Background header" />
                </div>
                <div className="flex flex-col w-max items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="text-xl md:text-3xl lg:text-5xl font-bold items-center text-slate-800 text-center">
                        <h1>Tous <strong className="text-primary">Albatros</strong><br /> Pour l'envol de la jeunesse</h1>
                    </div>
                    <div className="flex flex-row gap-10 pt-6 md:pt-20">
                        <button className="bg-primary rounded-full px-6 py-2 w-auto h-auto">
                            <Link to="/contact" className="text-xs md:text-sm text-white font-medium">Nous contacter</Link>
                        </button>
                        <button className="bg-white rounded-full px-6 py-2 w-auto h-auto">
                            <Link to="/services" className="text-xs md:text-sm text-slate-600 font-medium">Prestations</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-20 flex content-center">
                <Icon contentIcon={contentIcon} />
            </div>
            <section className="pt-32 flex flex-col relative max-w-screen-xl mx-auto">
                <h2 className="text-4xl text-slate-800 font-bold mx-auto">Les fondatrices</h2>
                <div className="w-full mx-auto flex flex-col flex-wrap">
                    <div className="flex flex-row flex-wrap justify-center mt-16 md:justify-between md:mt-32 items-center">
                        <div className="flex">
                            <img src={require('../assets/images/home/BlobCamille.png')} className="w-72 h-72 md:w-96 md:h-96 top-0" alt="Blob Camille" />
                        </div>
                        <div>
                            <img src={require('../assets/images/home/Citation.png')} className="w-72 h-36 mt-8 md:mt-0 md:w-[32rem] md:h-52 md:mr-16 top-0" alt="Blob Camille" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center md:justify-between mt-32 items-center">
                        <div className="">
                            <img src={require('../assets/images/home/BlobAnny.png')} className="w-72 h-72 md:w-96 md:h-96 top-0" alt="Blob Anny" />
                        </div>
                        <div className="">
                            <img src={require('../assets/images/home/BlobMylene.png')} className="w-72 h-72 md:w-96 md:h-96 top-0" alt="Blob Mylène" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-32 px-10 md:px-0 flex flex-col relative max-w-screen-xl mx-auto">
                <TextDescription TextDescription={contentDescription[0]} />
            </section>
        </div>
    );
}

export default Home;