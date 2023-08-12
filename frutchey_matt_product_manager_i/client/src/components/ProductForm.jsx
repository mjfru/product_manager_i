import { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/add/product', {
      title,
      price,
      description
    })
    .then(res => {
      console.log(res);
      console.log(res.data)
      setTitle("");
      setPrice("");
      setDescription("");
    })
    .catch(err => console.log(err))
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label className="form-label">Product Name: </label><br/>
        <input type="text" name="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label className="form-label">Price: </label><br/>
        <input type="number" name="price" className="form-control" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label className="form-label">Product Description: </label><br/>
        <input type="text" name="description" className="form-control" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" value="Add Product" className='btn btn-secondary'/>
    </form>
  )

}
export default ProductForm;