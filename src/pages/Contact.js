import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto mt-32">
                <div className="px-10 lg:px-0 lg:w-1/3">
                    <h2 className="text-3xl font-semibold text-[#20314C]">Nous sommes <span className="text-primary font-bold">à votre disposition</span> pour discuter</h2>
                    <p className="mt-5">Notre équipe est disponible de 9h à 17h30, du lundi au jeudi et sera ravie d'échanger avec vous.</p>
                </div>
                <div className="w-2/3 border p-10 rounded-lg mt-20 lg:mt-0">
                    <h1 className="text-[#20314C] text-3xl font-bold">Nous contacter</h1>
                    <div className="flex flex-col lg:flex-row lg:gap-10 mt-10">
                        <div className="lg:w-1/2">
                            <div className="flex flex-col">
                                <label>Nom : <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Nom" className="border rounded h-8 placeholder-[#CBD5E1]" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label>Email : <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Email" className="border rounded h-8 placeholder-[#CBD5E1]" /><br/>
                            </div>
                        </div>
                        <div className="flex flex-col lg:w-1/2">
                            <label>Prénom : <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Prénom" className="border rounded h-8 placeholder-[#CBD5E1]" /><br/>
                        </div>
                    </div>
                    <div className="lg:mt-5">
                        <label>Message : <span className="text-red-500">*</span></label>
                        <textarea placeholder="Message" className="border rounded w-full placeholder-[#CBD5E1]" rows="6" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
                        <p className="text-xs">Tous les champs sont obligatoires</p>
                        <button className="bg-primary text-white px-8 py-1 rounded-xl mt-5 lg:mt-0">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;