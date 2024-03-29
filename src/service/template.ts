export type EmailProps = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const templateEmail = ({ name, email, phone, subject, message }: EmailProps) => `<!doctype html>
<html lang="en-US">

<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <title>CEEB - Contato via site</title>
  <meta name="description" content="Recuperação de Senha.">
  <style type="text/css">
    a:hover {
      text-decoration: underline !important;
    }
  </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
  <!--100% body table-->
  <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
    style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
    <tr>
      <td>
        <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
          align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td style="height:80px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="text-align:center;">

              <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                Casa Espírita Eurípedes Barsanulpho</h1>
            </td>
          </tr>
          <tr>
            <td style="height:20px;">&nbsp;</td>
          </tr>
          <tr>
            <td>
              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                style="max-width:670px;background:#fff; border-radius:3px; -webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                <tr>
                  <td style="height:40px;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:0 35px;">
                    <h1 style="color:#1e1e2d; font-weight:500; text-align:center; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                      Contato</h1>
                    <span
                      style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                     Data de envio: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", })}
                    </p>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                     <b>Nome</b>: ${name}
                    </p>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                     <b>E-mail:</b> ${email}
                    </p>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                    <b>Telefone:</b> ${phone}
                    </p>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                    <b>Assunto:</b> ${subject}
                    </p>
                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                    <b>Mensagem:</b> ${message}
                    </p>
                    
                  </td>
                </tr>
                <tr>
                  <td style="height:40px;">&nbsp;</td>
                </tr>
              </table>
            </td>
          <tr>
            <td style="height:20px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                &copy; <strong>CEEB</strong></p>
            </td>
          </tr>
          <tr>
            <td style="height:80px;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!--/100% body table-->
</body>

</html>`