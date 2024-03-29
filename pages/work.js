import Header from '../components/header';

const today = new Date(); // コピーライトの年表記用

const works = [
    {
        name: "学校からの情報通知bot V1",
        discription: "新型コロナウイルスによる臨時休校期間中の連絡をすべての生徒が円滑に受け取れるようにbotを開発しました。見るに耐えないコードだったので非公開です。",
        lang: "PHP,CSS,HTML",
        link: "",
        type: 1
    },
    {
        name: "学校からの情報通知bot V2",
        discription: "V1はPHPで作成しましたが，PHPより応答速度が若干早く，自身が書き慣れていたことからNode.jsを選びました。なおデザインも大幅に変更し，フルリニューアルしました。",
        lang: "JavaScript,Node.js,CSS",
        link: "https://github.com/6mile0/School-BOT",
        type: 0
    },
    {
        name: "オンライン授業自動参加ツール",
        discription: "友達との初めての共同制作です。Google Meetに自動ログインして授業に参加するものになっています。作ったもののオンライン授業をする機会がそんなになく，結局使いませんでした。悪用防止のため非公開です。",
        lang: "Python",
        link: "",
        type: 1
    },
    {
        name: "LINE連絡網",
        discription: "学校と生徒をLINE経由で直接繋ぎ，知らせたいことを一斉送信することができる連絡網サービスを開発しました。諸事情でソースコードは非公開です。",
        lang: "Node.js,JavaScript,HTML,CSS",
        link: "",
        type: 1
    }
]

const Work = () => {
    return (
        <div>
            <Header />

            <div className="container mg-c">
                <div className="columns">
                    <div className="column col-8 mainBox">
                        <h2>Works</h2>
                        <p>今まで制作した順に並んでいます。</p>

                        <div className="columns grid-lg mg-u">
                            {Object.keys(works).map((value, key) => {
                                const judge = () => {
                                    if (works[value]['type'] == 0) {
                                        return (
                                            <div className="card-footer">
                                                <a className="btn btn-primary" href={works[value]['link']} target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="card-footer">
                                                <a className="btn btn-primary disabled"><i className="fas fa-lock"></i> 非公開</a>
                                            </div>
                                        )
                                    }
                                }

                                var lang_Array = works[value]['lang'].split(',');

                                if (!key / 2 == 0) {
                                    return (
                                        <div className="column col-6 col-xs-12 mg-d" key={key}>
                                            <div className="card">
                                                <div className="card-header">
                                                    <div className="card-title card-size">{works[value]['name']}</div>
                                                    <div className="card-subtitle">{works[value]['discription']}</div>
                                                </div>
                                                <div className="card-body">
                                                    {Object.keys(lang_Array).map((value, key) => {
                                                        return (<span className="chip" key={key}>{lang_Array[value]}</span>)
                                                    })}
                                                </div>
                                                {judge()}
                                            </div>
                                        </div>)
                                } else {
                                    return (
                                        <div className="column col-6 col-xs-12 mg-d" key={key}>
                                            <div className="card" key={key}>
                                                <div className="card-header">
                                                    <div className="card-title card-size">{works[value]['name']}</div>
                                                    <div className="card-subtitle">{works[value]['discription']}</div>
                                                </div>
                                                <div className="card-body">
                                                    {Object.keys(lang_Array).map((value, key) => {
                                                        return (<span className="chip" key={key}>{lang_Array[value]}</span>)
                                                    })}
                                                </div>
                                                {judge()}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-text">
                <p>&copy; {today.getFullYear()} 6mile&apos;s Portfolio</p>
            </div>
        </div >
    )
}

export default Work;
