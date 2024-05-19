export default function Form2(){
    return <form className="form-body" action="/update" method="POST">
            <div style={{display:"flex"}}>
            <label style={{marginLeft:"-60px",marginTop:"-10px"}}>Verify it's you :</label>
            <input type="tel" placeholder="Phone Number" name="PhoneNumberVer" id="Phone Number" style={{margin:"3%",marginLeft:"-18px"}}></input></div>
            <label style={{marginTop:"24px",marginLeft:"-60px"}}>Fill the Updated details :</label>
                <input type="text" placeholder="Name" name="Name" id="Name" style={{margin:"3%",marginLeft:"4%"}}></input>
                <input type="email" placeholder="Email" name="Email" id="Email" style={{margin:"3%",marginLeft:"4%"}}></input>
                <input type="tel" placeholder="Phone Number" name="PhoneNumber" id="Phone Number" style={{margin:"3%",marginLeft:"4%"}}></input>
                <input type="date" placeholder="Date of Birth" name="DateofBirth" id="Dob" style={{margin:"3%",marginLeft:"4%"}}></input>
                <button className="submit" style={{margin:"4%",marginLeft:"22%"}} type="submit" value="Submit">Update</button>
                
    </form>
}