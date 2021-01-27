import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {getProducts,deleteProduct} from '../Actions/Index'
import '../Styles/BookList.css'
import AddBook from './AddBook'
function BookList(props) {

    const [popup,setPopup] = useState(false)
    const [update,setUpdate] = useState(false)
    const [values,setValues] = useState({name: "", price: 0, category: "", description:"", index: null})
    
    useEffect(() => {
        props.getProducts()
    }, [])

    function renderTable() {
        if(!props.books) {
            return null
        }
        else {
        return props.books.map((book,index) => {
            return (
                <tr key={index}>
                    <td onClick={() => renderUpdate(book.name, book.price, book.category,book.description, index) }>{book.name}</td>
                    <td>{book.price}</td>
                    <td>{book.category}</td>
                    <td><button className="delete-button" onClick={() => deleteData(book.name) }>Delete</button></td>
                </tr>
            )
        })
    }
}

    function renderUpdate(name, price,category,description,index) {
        setUpdate(true)
        setValues(()=> {
            return {
                name,
                price,
                category,
                description,
                index
            }
        })
    }
    
    function deleteData(name) {
        console.log(name)
        props.deleteProduct(name)
    }

    function closePopup() {
        setPopup(false)
        setUpdate(false)
    }

    return (
        <div>
            <div className="book-add"><button onClick={() => setPopup(true)}>Add a new Book</button></div>
            {popup &&<AddBook close= {closePopup}/>}
            <table className={popup|| update? "nodisplay": "popupclosed"}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                {props.books && renderTable()}
            </table>
         {update && <AddBook index={values.index} update={true} description={values.description} name={values.name} price={values.price} category = {values.category} close={closePopup}/> }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state
    }
}


export default connect(mapStateToProps,{getProducts,deleteProduct})(BookList)