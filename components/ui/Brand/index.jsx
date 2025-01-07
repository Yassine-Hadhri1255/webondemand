
import Image from 'next/image';
const Brand = ({ ...props }) => (
    <svg {...props} width="130" height="40" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="49" height="40" rx="8" fill="#0EA5E9" />
        <Image
        src="/on-button.png" // Chemin relatif depuis le dossier `public`
        alt="Logo"
        width={200} // Largeur personnalisée
        height={100} // Hauteur personnalisée
      />
        
    </svg>
)
export default Brand