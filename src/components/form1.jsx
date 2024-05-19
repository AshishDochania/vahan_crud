export default function Form1(){
    return <form className="form-body" action="/create" method="POST">
                <input type="text" placeholder="Name" name="Name" id="Name" style={{margin:"4%"}}></input>
                <input type="email" placeholder="Email" name="Email" id="Email" style={{margin:"4%"}}></input>
                <input type="tel" placeholder="Phone Number" name="PhoneNumber" id="Phone Number" style={{margin:"4%"}}></input>
                <input type="date" placeholder="Date of Birth" name="DateofBirth" id="Dob" style={{margin:"4%"}}></input>
                <button className="submit" style={{margin:"4%",marginLeft:"22%"}} type="submit" value="Submit">Submit</button>
                
    </form>
}