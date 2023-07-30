import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Icon from "../components/header/Icon";
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
        </div>
    );
}

export default Home;