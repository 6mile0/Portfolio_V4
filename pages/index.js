import Header from '../components/header';

const birthDay = {
  year: 2003,
  month: 10,
  date: 4
};

// Dateインスタンスに変換
const birthDate = new Date(birthDay.year, birthDay.month - 1, birthDay.date);

// 文字列に分解
const y2 = birthDate.getFullYear().toString().padStart(4, '0');
const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
const d2 = birthDate.getDate().toString().padStart(2, '0');

// 今日の日付
const today = new Date();
const y1 = today.getFullYear().toString().padStart(4, '0');
const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
const d1 = today.getDate().toString().padStart(2, '0');

const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);

const profile = {
  Name: "ろくまいる / 6mile",
  Birthday: "October 4th, 2003 (Age " + age + ")",
  University: "Tokyo University of Technology",
  Department: "Computer Sciences"
}

const skills = {
  Frontend: "TypeScript, JavaScript, React, Next.js",
  Backend: "Node.js, Python, Go(little experience)",
  Infrastructure: "Linux(Ubuntu,CentOS), Apache, Nginx, Docker, Kubernetes",
  Others: "VSCode, Git, Auth0, Mackerel"
}

const histories = [
  {
    date: "2003/10/04",
    event: "生誕",
    lg_Icon: true
  },
  {
    date: "2014",
    event: "Windows XPサポート終了に伴い，家族共有で使っていたパソコンを親から譲ってもらい，手打ちホームページ制作を始める",
    lg_Icon: false
  },
  {
    date: "2016",
    event: "独習PHP 第3版を購入し，PHPの学習を始め，この時期に自宅サーバー初号機の稼働を開始する",
    lg_Icon: false
  },
  {
    date: "2017",
    event: "母校のHPのデザインを担当する",
    lg_Icon: false
  },
  {
    date: "2017 ― 2019",
    event: "某MinecraftサーバーコミュニティーのWebサイト制作を担当する",
    lg_Icon: false
  },
  {
    date: "2019/04/01",
    event: "高校に入学",
    lg_Icon: true
  },
  {
    date: "2020",
    event: "新型コロナウイルスによる臨時休校期間中に学校からの情報をLINEで通知するbotを開発する(V1)",
    lg_Icon: false
  },
  {
    date: "2020 ― 2021",
    event: "Node.js, React.js, Next.jsの習得を本格的に始める",
    lg_Icon: false
  },
  {
    date: "2021",
    event: "2020年度に作成した学校からの情報をLINEで通知するbotの全面リニューアルを行う(V2)",
    link: "https://github.com/6mile0/School-BOT",
    lg_Icon: false
  },
  {
    date: "2021",
    event: "母校の陸上部にLINEを用いた(学校と保護者直結型)連絡網サービスを開発・提供する",
    lg_Icon: false
  },
  {
    date: "2022/04/05",
    event: "東京工科大学(コンピュータサイエンス学部 先進情報専攻)に入学",
    lg_Icon: true
  },
]

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="hero wrapper hero-box hero-warpper">
          <div className="hero-body">
            <div className="columns out-box">
              <div className="column col-12 col-xs-12 pf">
                <div className="boxContainer out-box">
                  <div className="box">
                    <img className="img-pro" src="/me.jpg" />
                  </div>
                  <div className="box">
                    <div className="pf-d">
                      <p className="name">ろくまいる / 6mile</p>
                      <p className="subtext anime_border">日々の幸せは，プログラムを書くこと。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mg-c top-mg">
        <div className="columns col-9 col-xs-11 mainBox">
          <h2>Profile</h2>
          <table className="table">
            <tbody>
              {Object.keys(profile).map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value}</td>
                    <td>{profile[value]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mg-c">
        <div className="columns col-9 col-xs-11 mainBox">
          <h2>Skills</h2>
          <table className="table">
            <tbody>
              {Object.keys(skills).map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value}</td>
                    <td>{skills[value]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="description">
            <p>※未経験の技術であっても，積極的にキャッチアップします</p>
          </div>
        </div>
      </div>

      <div className="mg-c">
        <div className="col-9 col-xs-11 mainBox">
          <h2>Histories</h2>
          <div className="timeline mg-u">
            {Object.keys(histories).map((value, key) => {
              const progress = () => {
                if (key == 0) {
                  return ('Start')
                } else if (key == histories.length - 1) {
                  return ('Now')
                } else {
                  return (key)
                }
              }

              const link = () => {
                if (!(histories[key]['link'] == null)) {
                  return (<a href={histories[key]['link']} target='_blank' rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>)
                }
              }

              if (histories[value]['lg_Icon'] == true) {
                return (
                  <div className="timeline-item" key={key}>
                    <div className="timeline-left"><a className="timeline-icon icon-lg tooltip" data-tooltip={progress()}></a></div>
                    <div className="timeline-content">
                      <div className="tile">
                        <div className="tile-content">
                          <p className="tile-subtitle">{histories[value]['date']}</p>
                          <p className="tile-title">{histories[value]['event']} {link()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="timeline-item" key={key}>
                    <div className="timeline-left"><a className="timeline-icon tooltip" data-tooltip={progress()}></a></div>
                    <div className="timeline-content">
                      <div className="tile">
                        <div className="tile-content">
                          <p className="tile-subtitle">{histories[value]['date']}</p>
                          <p className="tile-title">{histories[value]['event']} {link()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>

      <div className="mg-c">
        <div className="col-9 col-xs-11 mainBox explain">
          <h2>Contact</h2>
          <p>ご連絡等は <code>info@6mile.dev</code> 宛までよろしくお願い致します。</p>
        </div>
      </div>

      <div className="c-text">
        <p>&copy; {today.getFullYear()} 6mile&apos;s Portfolio</p>
        <p>Illust by @unios103i.</p>
      </div>
    </div >
  )
}

export default Home;
