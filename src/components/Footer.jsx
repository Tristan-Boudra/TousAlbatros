const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center md:items-start max-w-screen-xl mx-auto p-10 border-t-2">
      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <img src={require('../assets/logos/logo_tousAlbatros.png')} className="h-20 w-auto" alt="Logo TousAbatros" />
        <p className="text-[#20314C] font-medium text-center md:text-left">Tous <span className="text-[#36BDE8]">Albatros</span><br/>Pour l'envol de la jeunesse</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#20314C] text-lg font-bold">Où sommes-nous ?</h3>
          <p className="text-[#64748B] mt-3 w-1/2 md:w-64 text-center md:text-left">Maison des Associations, 93 la Canebière, boîte aux lettres n°160, 13001 MARSEILLE</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#20314C] text-lg font-bold">Contact</h3>
          <a href="telto:0616133806" className="text-[#64748B] mt-3">06 16 13 38 06</a>
          <a href="mailto:contact@tousalbatros.fr" className="text-[#64748B]">contact@tousalbatros.fr</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer