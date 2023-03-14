import './Desktopview.styles.css'
const DesktopView  = () => {
	return (
		<div  className={`${window.innerWidth >= 768 ? 'hidden sm:block' : 'sm:hidden' }`}>
		<div className="flex h-screen">
			<aside className="sidebar h- w-3/12">test</aside>
				<main className="bg-gray w-9/12">
				<nav className="bg-light">navigation</nav>
				</main>
		</div>
		</div>
	)
}


export default DesktopView;