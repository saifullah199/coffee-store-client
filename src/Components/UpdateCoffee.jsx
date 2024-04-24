import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee =useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault()

        const form = e.target

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24 space-y-8">
            <h2>Update a coffee: {name} </h2>
            <form onSubmit={handleUpdateCoffee} className="space-y-8">
                {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Available Quantity</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Taste</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Details</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    {/* form row */}
                    <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="w-full input input-bordered" />
                        </label>
                    </div>
                    
                    </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;