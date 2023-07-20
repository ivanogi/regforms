export default function FLT() {
  return (
      <form
        className=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className="">
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className="" type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" className="" type="email" name="email" required />

        <label htmlFor="feedback">What is your feedback?</label>
        <textarea id="feedback" className="" wrap="soft" name="feedback" required></textarea>
        <button className="" type="submit">Submit</button>
      </form>
  )
}
