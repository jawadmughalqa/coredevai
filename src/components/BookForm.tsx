import { site } from "@/lib/site";

// The kit's booking-form recipe (system.js validates and posts FormData to data-endpoint).
export function BookForm() {
  return (
    <form
      className="form"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      data-endpoint="/api/contact"
      data-sent="Your Money Flow Check request is in. We reply within 24 hours."
      noValidate
    >
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="f-name-err" />
        <p className="field__error" id="f-name-err" hidden>Write your name.</p>
      </div>
      <div className="field">
        <label htmlFor="f-email">Work email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
        <p className="field__error" id="f-email-err" hidden>Write an email address with an @, like name@company.com.</p>
      </div>
      <div className="field field--full">
        <label htmlFor="f-link">Link to your product</label>
        <input id="f-link" name="link" type="text" autoComplete="url" required aria-describedby="f-link-err" />
        <p className="field__error" id="f-link-err" hidden>Paste the address of the app or its staging site.</p>
      </div>
      <div className="field field--full">
        <label htmlFor="f-msg">What should we test?</label>
        <textarea id="f-msg" name="message" rows={4} required aria-describedby="f-msg-err" />
        <p className="field__error" id="f-msg-err" hidden>Write the flows or features you want tested.</p>
      </div>
      <div className="btn-row"><button className="btn btn--primary" type="submit">{site.mainAction}</button></div>
      <p className="form__status" role="status" data-form-status />
      <p className="t-small muted">{site.reply}</p>
    </form>
  );
}
