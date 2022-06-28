function Header() {
    return (
        <div>
            <div className="nav-box">
                <Link href="/"><a className="nav-btn">Home</a></Link>
                <Link href="/work"><a className="nav-btn">Works</a></Link>
                <Link href="/link"><a className="nav-btn">Links</a></Link>
                <Link href="https://blog.6mile.dev/"><a className="nav-btn">Blog</a></Link>
            </div>
        </div>
    )
}

export default Header;