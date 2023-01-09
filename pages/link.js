import Header from '../components/header';

const today = new Date(); // コピーライトの年表記用

const accounts = [
    {
        name: "Twitter",
        account: "@6mile0",
        filename: "twitter",
        link: "https://twitter.com/6mile0"
    },
    {
        name: "Twitter(Sub)",
        account: "@6mile0_s",
        filename: "twitter",
        link: "https://twitter.com/6mile0_s"
    },
    {
        name: "Discord",
        account: "ろくまいる#1151",
        filename: "discord",
    },
    {
        name: "GitHub",
        account: "6mile0",
        filename: "github",
        link: "https://github.com/6mile0"
    },
    {
        name: "Mail(Genaral)",
        account: "info@6mile.dev",
        filename: "gmail",
        link: "mailto:info@6mile.dev"
    },
    {
        name: "Mail(Support)",
        account: "service@6mile.dev",
        filename: "gmail",
        link: "mailto:service@6mile.dev"
    },
    {
        name: "Qiita",
        account: "@6mile0",
        filename: "qiita",
        link: "https://qiita.com/6mile0"
    },
    {
        name: "Zenn",
        account: "6mile",
        filename: "zenn",
        link: "https://zenn.dev/6mile"
    },
    {
        name: "KeyBase",
        account: "6mile",
        filename: "keybase",
        link: "https://keybase.io/6mile"
    }
]

const Links = () => {
    return (
        <div>
            <Header />

            <div className="container mg-c">
                <div className="columns">
                    <div className="column col-9 mainBox">
                        <h2>Links</h2>
                        <p>各種アカウント情報です。</p>

                        <div className="columns grid-lg mg-u">
                            {Object.keys(accounts).map((value, key) => {
                                const path = "/svgs/" + accounts[value]['filename'] + ".svg";
                                return (
                                    <div className="column col-3 col-xs-12 mg-d divbutton" key={key}>
                                        <a href={accounts[value]['link']} target="_blank" rel="noreferrer">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="columns">
                                                        <div className="column col-2 icon-space"><img className="icon" src={path} /></div>
                                                        <div className="column col-6 outer">
                                                            <div className="account">
                                                                <div className="column service-text">{accounts[value]['name']}</div>
                                                                <div className="column accountname">{accounts[value]['account']}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="description">Icon by <a href="https://simpleicons.org/" target="_blank" rel="noreferrer">Simple Icons</a>.</p>
                    </div>
                </div>
            </div>
            <div className="c-text">
                <p>&copy; {today.getFullYear()} 6mile&apos;s Portfolio</p>
            </div>
        </div >
    )
}

export default Links;
