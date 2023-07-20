import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js <i class="fas fa-toolbox    "></i></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p class="ubusize6" id="ShearsMobile">Travel Flat Iron -  Limited 2-Year Warranty</p>
        <p class="helsize3">Olivia Garden professional flat iron carries a limited warranty against defects in material or workmanship for 24 months.</p>
        <p class="helsize3"><b>WARRANTY DOES NOT COVER:</b></p>

        <ul class="helsize3">
            <li>Normal wear and tear such as shorts in the power supply cord or plug</li>
            <li>Damage due to external factors, misuse or abuse such as but not limited to: dropping, foreign objects being placed on the plates, wrong voltage supply, neglect in safety precautions</li>
            <li>Tampering such as repair or attempted repair by an unauthorized party</li>
            <li>Damage resulting from use of unauthorized attachments</li>
        </ul>
        <p class="helsize3"><b>WHERE VALID:</b></p>

      <form
        className=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >

        <div class="row">
            <p className="">
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>

            <div class="span3 offset3 mobile-feature-span3" align="left">

            <input type="hidden" name="form-name" value="feedback" />
    
            <label htmlFor="fname">First Name:*</label> <br />
            <input id="fname" className="" type="text" name="fname" required/> <br />

            <label htmlFor="lname">Last Name:*</label> <br />
            <input id="lname" className="" type="text" name="lname" required/> <br />

            <label htmlFor="email">Email:*</label> <br />
            <input id="email" className="" type="text" name="email" required /><br />
            
            <label htmlFor="email"> Serial Number:* <br />
            (white letters & numbers below the air filter under the intake)</label> <br />
            <input id="email" className="" type="text" name="email" required /><br />
            
            <label htmlFor="email">Model:*</label> <br />
            <select id="email" className="" type="text" name="email" required>
                <option value="">Select</option>
                <option value="CIFL1">Ceramic Flat Iron</option>
                <option value="TAFL1">Titanium+ion Flat Iron</option>
                <option value="CIFLT1">Travel Flat Iron</option>
            </select>
            
            <br />
            
            <label htmlFor="date"> Date of Purchase:*</label> <br />
            <input id="date"  className="" type="text" name="date" required /><br />
            
            <label htmlFor="purchased"> Purchased at:*</label> <br />
            <input id="purchased" className="" type="text" name="purchased" required /><br />
            
            <button className="" type="submit">Submit</button>

            </div>

            <div class="span3 offset3 mobile-feature-span3" align="left">

            <input type="hidden" name="form-name" value="feedback" />
    
            <label htmlFor="phone">Phone Number</label> <br />
            <input id="phone" className="" type="text" name="phone" /> <br />

            <label htmlFor="add1">Address Line 1:*</label> <br />
            <input id="add1" className="" type="text" name="add1" required/> <br />

            <label htmlFor="add2">Address Line 2:*</label> <br />
            <input id="add2" className="" type="text" name="add2" required/> <br />

            </div> 
        </div>  
      </form>
      </main>
      <Footer />
    </div>
  );
}
