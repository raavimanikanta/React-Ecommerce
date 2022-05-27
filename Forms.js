import React from 'react'
import "./form.css"

const Forms = () => {
  return (
    <div>
        <div>
            <form>
                <div className="form-group">

                    <h2>Place Your Order</h2>

                    <label for="number" className='headform'>Phone</label><br/>
                    <input type="number" className="form-control" placeholder="Enter Mobile" id="mobile"/><br/><br/>

                    <label for="name" className='headform'>First Name</label><br/>
                    <input type="text" className="form-control" placeholder="Enter First Name" id="firstname"/><br/><br/>

                    <label for="name" className='headform'>Last Name</label><br/>
                    <input type="text" className="form-control" placeholder="Enter Last Name" id="lastname"/><br/><br/>

                    <label for="address" className='headform'>Address</label><br/>
                    <input type="text" className="form-control" placeholder="Enter email" id="address"/><br/><br/>

                    <label for="email" className='headform'>Email</label><br/>
                    <input type="email" className="form-control" placeholder="Enter email" id="email"/><br/><br/>
                </div>
                
                
                <button type="submit" className="btn-primary">Buy Now</button>
            </form>

        </div>
    </div>
  )
}

export default Forms