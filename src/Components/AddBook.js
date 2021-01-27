import '../Styles/AddBook.css'
import {useState,useEffect} from 'react'
import {addproduct,updateProduct} from '../Actions/Index'
import {connect} from 'react-redux'

function AddBook(props) {

    const [data,setData] = useState({ name: props.name, price: props.price, category: props.category, description: props.description})

    function onChangeData(e) {
        setData((prevState) => {
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        })
    }

    function submitdata(e) {
        e.preventDefault()
        if(props.update ===  true) {
            console.log(data)
            props.updateProduct(props.index, data)
            props.close()
        }
        else {
           
            console.log(data)
            props.addproduct(data)
            props.close()
        }
        
    }


    return (
        <div className="popup">
            <div className="popup-inner">
                <h1>{props.update ? "Update the Book" : "Add a new Book"}</h1>
                <form onSubmit={(e) => submitdata(e) }>
                    <label>Name</label><br/>
                    <input type="text" name="name" onChange={onChangeData} value={data.name} required /><br/>
                    <label>Price</label><br/>
                    <input type="number" name="price" onChange={onChangeData} value={data.price} required /><br/>
                    <label>category</label><br/>
                    <input type="text" name="category" onChange={onChangeData} value={data.category} required /><br/>
                    <label>Description</label><br/>
                    <input type="text" name="description" onChange={onChangeData} value={data.description} required /><br/>
                    <button type="submit" >{props.update ? "Update Book" : "Add Book"}</button>
                </form>

                </div>
        </div>
    )
}

export default connect(null, {addproduct,updateProduct})(AddBook) 