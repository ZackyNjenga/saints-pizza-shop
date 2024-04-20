import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-4" >
            <Link className="text-primary font-semibold" href={""}>SAINTS PIZZA</Link>
            <nav className="flex items-center gap-6 text-gray-900  font-semibold">
                <Link href={''}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact </Link>
                <Link className="bg-primary text-white px-6 py-2 rounded-full" href={''}>
                    Login
                </Link>
            </nav>
        </header>
    );
}