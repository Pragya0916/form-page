
import { useState } from 'react';
import './App.css';

function App() {

    const [form1 , setForm1]  = useState({
      cname:'',
    })
    function handlerChange(e) {
      setForm1({[e.target.id] : e.target.value})
    }
    function handleSubmit(e){
      e.preventDefault();
      console.log(form1)
    }

      const cities = [
        'Ahmedabad' , 'Delhi' , 'Jaipur' , 'Bangalore' , 'Mysore' , 
        'Dehradun' , 'Pune' , 'Lucknow' , 'Udaipur', 'Kanpur', 
        'Prayagraaz', 'Kolkata' , 'Mumbai' , 'Chennai' , 'Gujrat'
      ]

  return (
  <>

  <div className='container'> 
      <form className="row m-2">
              <h3> Step-1</h3>
          <div className="col-2">
              <label htmlFor="inputPassword2">City Name</label>
          </div>
          <div className="col-4">
              <input type="text" className="form-control" id="cName" placeholder="City Name" value={form1.cname} onChange={handlerChange}/>
          </div>
          <div className="mt-2">
              <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-3">Submit Button</button>
          </div>
      </form>
    </div>
    
  <div className='container mt-5'> 
      <form>
       
          <h3> Step-2</h3>

          <div className="row m-2">
          <div className="col-2">
              <label htmlFor="inputPassword2">Name</label>
          </div>
          <div className="col-4">
              <input type="text" className="form-control" id="name" placeholder="Password"/>
          </div>
          </div>

          <div className="row m-2">
          <div className="col-2">
              <label htmlFor="inputPassword2">City</label>
          </div>
          <div className="col-4">
               <select className="form-select" aria-label="Default select example" id='city' >
                     <option selected>Select City</option>
                     {
                      cities.map( (city) => {
                        return <option>{city}</option>
                      })
                     }
                </select>
          </div>
          </div>

          <div className="row m-2">
          <div className="col-2">
              <label htmlFor="inputPassword2">Salary</label>
          </div>
          <div className="col-4">
              <input type="text" className="form-control" id="salary" placeholder="salary" />
          </div>
          </div>

          <div className="row m-2">
          <div className="col-2">
              <label htmlFor="inputPassword2">Mobile</label>
          </div>
          <div className="col-4">
              <input type="number" className="form-control" id="mobile" placeholder="mobile"/>
          </div>
          </div>

          <div className="row m-2">
          <div className="col-2">
              <label htmlFor="inputPassword2">Profile Picture</label>
          </div>
          <div className="col-4">
              <input type="file" className="form-control" id="profile" placeholder="Profile picture" />
          </div>
          </div>


          <div className="mt-2">
              <button type="submit" className="btn btn-primary mb-3">Submit Button</button>
          </div>
      </form>
    </div>

<div className='container mt-5'> 
    <h3> Step-3</h3>

        <div className="row m-2">
              <div className="col-2">
                 <label htmlFor="inputPassword2">City</label>
              </div>
              <div className="col-4"> 
              <select className="form-select" aria-label="Default select example" id='ncity'>
                     <option selected>Select City</option>
                     {
                      cities.map( (city) => {
                        return <option>{city}</option>
                      })
                     }
                </select>
          </div>
        </div>
        <div className="mt-2">
              <button type="submit" className="btn btn-primary mb-3">Submit Button</button>
          </div>
        </div> 


        <div className='container mt-5'>
        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Mobile</th>
      <th scope="col">Profile Picture</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
   
  </tbody>
</table>
</div>
  </>
  );
}

export default App;
