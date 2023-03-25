import MLOGO from './../Layout/components/assets/logos/m-markt-logo.png'

const Header = () => {
  return (
        <div className="w-full bg-primary text-white p-4">
            <div className="flex justify-between items-center">
                <img src={MLOGO} alt="logo" />
                <p>erp system</p>
             </div>

        </div>
  )
}

export default Header
