import MLOGO from './../Layout/components/assets/logos/m-markt-logo.png'
import Image from 'next/image'

const Header = () => {
  return (
        <div className="w-full bg-primary text-white p-4">
            <div className="flex justify-between items-center bg-slate-300">
                <Image width={100} height={100} src={MLOGO} alt="logo" />
                <p>erp system</p>
             </div>

        </div>
  )
}

export default Header
