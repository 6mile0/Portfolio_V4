import Link from 'next/link'

function Header() {
    return (
        <div>
            <div className="nav-box">
                <Link className="nav-btn" href="/">Home</Link>
                <Link className="nav-btn" href="/work">Works</Link>
                <Link className="nav-btn" href="/link">Links</Link>
            </div>
        </div>
    )
}

export default Header;
