
const SideBar = () => {
  return (
        <div className="sidebar h-screen bg-primary w-[250px]">
            <div className="sidebar__header">
                <div className="sidebar__header__logo">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="sidebar__header__title">
                    <p>ERP System</p>
                </div>
            </div>
            <div className="sidebar__body">
                <div className="sidebar__body__item">
                    <div className="sidebar__body__item__icon">
                        <img src="/icons/home.svg" alt="home" />
                    </div>
                    <div className="sidebar__body__item__title">
                        <p>Home</p>
                    </div>
                </div>
                <div className="sidebar__body__item">
                    <div className="sidebar__body__item__icon">
                        <img src="/icons/box.svg" alt="box" />
                    </div>
                    <div className="sidebar__body__item__title">
                        <p>Products</p>
                    </div>
                </div>
                <div className="sidebar__body__item">
                    <div className="sidebar__body__item__icon">
                        <img src="/icons/box.svg" alt="box" />
                    </div>
                    <div className="sidebar__body__item__title">
                        <p>Products</p>
                    </div>
                </div>
              </div>
        </div>
  )
}

export default SideBar
