const nodemailer = require("nodemailer");
const servicename = process.env.SERVICENAME; // サービス名定義

const sendMail = async (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: process.env.API_MAIL_HOST,
        port: process.env.API_MAIL_PORT,
        secure: false, // lsvは587
        auth: {
            user: process.env.API_MAIL_USER, // .envに記載
            pass: process.env.API_MAIL_PASS, // .envに記載
        },
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    // メール送信(管理者宛)
    const mailData_host = {
        from: 'noreply@6mile.dev',
        to: "info@6mile.dev",
        subject: `${req.body.name}様より問い合わせがありました`,
        text: "お問い合わせがありました",
        html: `
        <!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>メール受信</title>
</head>
<body>
    <div style="margin:0;padding:0" bgcolor="#FFFFFF">
        <table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr align="center">
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" style="padding-bottom:20px;max-width:600px;">
                            <tbody>
                                <tr>
                                    <td>
                                        <div
                                            style="border-style:solid;border-width:thin;border-color:#dadce0;padding:40px 20px;max-width:480px;">
                                            <div
                                                style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; border-bottom:thin solid #dadce0;color:#000;line-height:32px;padding-bottom:24px;text-align:center;word-break:break-word">
                                                <div style="font-size:24px">
                                                    お問い合わせがありました
                                                </div>
                                            </div>
                                            <div
                                                style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:16px;color:rgba(0,0,0,0.87);line-height:23px;padding-top:20px; text-align:left; margin-bottom: 30px;">
                                                <p style="margin-bottom: 30px;">
                                                    「${req.body.name}」様よりお問い合わせがありました。<br />
                                                    内容を確認し、2-3日以内に「info@6mile.dev」アドレスで返信してください。
                                                </p>
                                                <p>下記が問い合わせ内容です。</p>
                                            </div>
                                            <div style=" font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo,
                                                    Osaka, sans-serif; line-height:23px; font-size:16px;
                                                    color:rgba(0,0,0,0.87);">
                                                <h4>◆送信者メールアドレス</h4>
                                                <p>${req.body.content}</p>
                                                <h4>◆お問い合わせ内容</h4>
                                                <p>${req.body.email}</p>
                                                <h4>◆送信者IPアドレス</h4>
                                                <p>${req.body.senderIP}</p>
                                            </div>
                                        </div>
                                        <div
                                            style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color:rgba(0,0,0,0.54);font-size:12px;line-height:23px;padding-top:14px;text-align:center">
                                            <p>サービス名：${servicename}</p>
                                            <p>本メールは送信専用メールアドレス(noreply@6mile.dev)から配信されています。</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
        `,
    };

    const mailData_Client = {
        from: 'noreply@6mile.dev',
        to: `${req.body.email}`,
        subject: `6mile's Portfolioへのお問い合わせありがとうございます【自動送信メール】`,
        text: "正常に送信が完了しました",
        html: `
    <!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>送信完了</title>
</head>
<body>
    <div style="margin:0;padding:0" bgcolor="#FFFFFF">
        <table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr align="center">
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0"
                            style="padding-bottom:20px;max-width:600px;">
                            <tbody>
                                <tr>
                                    <td>
                                        <div
                                            style="border-style:solid;border-width:thin;border-color:#dadce0;padding:40px 20px;max-width:480px;">
                                            <div
                                                style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; border-bottom:thin solid #dadce0;color:#000;line-height:32px;padding-bottom:24px;text-align:center;word-break:break-word">
                                                <div style="font-size:24px"><img style="vertical-align: middle;"
                                                        src="https://i.imgur.com/C2vf1fN.png" height="28" width="28">
                                                    送信が完了しました
                                                </div>
                                            </div>
                                            <div
                                                style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:16px;color:rgba(0,0,0,0.87);line-height:23px;padding-top:20px; text-align:left; margin-bottom: 50px;">
                                                <p style="margin-bottom: 30px;">
                                                    お問い合わせ頂きましてありがとうございます。<br />
                                                    内容を確認の上、2-3日以内にご入力頂きましたメールアドレス宛にご返信いたします。<br />
                                                    このメールに覚えがない、2-3日経過しても返信がない場合は、大変お手数おかけ致しますが、「info@6mile.dev」までご連絡ください。<br />
                                                </p>
                                                <p>下記がご入力頂きました内容です。</p>
                                            </div>
                                            <div style=" font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo,
                                                    Osaka, sans-serif; line-height:23px; font-size:16px;
                                                    color:rgba(0,0,0,0.87);">
                                                <h4>◆お名前</h4>
                                                <p>${req.body.name}</p>
                                                <h4>◆メールアドレス</h4>
                                                <p>${req.body.email}</p>
                                                <h4>◆お問い合わせ内容</h4>
                                                <p>${req.body.content}</p>
                                            </div>
                                        </div>
                                        <div
                                            style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color:rgba(0,0,0,0.54);font-size:12px;line-height:23px;padding-top:14px;text-align:center">
                                            <p>サービス名：6mile's Portfolio</p>
                                            <p>本メールは送信専用メールアドレス(noreply@6mile.dev)から配信されています。</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
    `,
    };

    await new Promise((resolve, reject) => { // ユーザー宛にメールを送信
        // send mail
        transporter.sendMail(mailData_Client, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    await new Promise((resolve, reject) => { // 管理者宛にメールを送信
        // send mail
        transporter.sendMail(mailData_host, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    res.send('success');
};

export default sendMail;