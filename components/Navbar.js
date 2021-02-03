import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="logo">
			<div>
				<h1>Ninja List</h1>
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ninja">
				<a>Ninja List</a>
			</Link>
		</nav>
	);
};

export default Navbar;
