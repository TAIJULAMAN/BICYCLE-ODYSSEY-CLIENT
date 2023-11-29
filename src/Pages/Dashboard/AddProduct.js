import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const productName = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const img = e.target.img.value;
        const quantity = e.target.quantity.value;
        const order = e.target.order.value;
        const item = { productName, img, order, quantity, price, description } 
        
        fetch('https://bicycle-odyssey-server.onrender.com/parts', {
             method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(item)
         })
         .then(res=>res.json())
         .then(data=>{
            toast.success("Product added successfully!");
            e.target.reset()
         })
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 pt-2.5 justify-items-center gap-5"
            action=""
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Product Name"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="text"
              name="img"
              required
              placeholder="Image URL"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="number"
              name="order"
              required
              placeholder="Min Order"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="number"
              name="quantity"
              required
              placeholder="Quantity"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="number"
              name="price"
              required
              placeholder="Price Per Unit"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="text"
              name="description"
              required
              placeholder="Add a description"
              className="input input-bordered w-full max-w-md"
            />

            <input
              className="btn w-full max-w-md btn-accent"
              type="submit"
              value="Add Item"
            />
          </form>
    );
};

export default AddProduct;