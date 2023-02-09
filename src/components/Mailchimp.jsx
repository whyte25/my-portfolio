import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "./NewsLetter";

export default function Mailchimp() {
  // const postUrl = `${process.evn.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id${process.env.REACT_APP_MAILCHIMP_ID}`;

  const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(FormData) => subscribe(FormData)}
          />
        )}
      />
    </>
  );
}
