import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
    const url = 'http://localhost:3005/products'; // CRUD işlemlerinin yapılacağı API URL'si
    const [data, setData] = useState([]); // Verilerin tutulacağı state
    const [product, setProduct] = useState({
      id: '',
      name: '',
      info: '',
      price: '',
      image: ''
    }); // Ürün bilgilerinin tutulacağı state
  
    // Veri getirme fonksiyonu
    const fetchData = () => {
      axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  
    // Input alanlarının değişimini takip eden fonksiyonlar
    const nameChange = (e) => setProduct({ ...product, name: e.target.value });
    const contactChange = (e) => setProduct({ ...product, info: e.target.value });
    const titleChange = (e) => setProduct({ ...product, price: e.target.value });
    const imageChange = (e) => setProduct({ ...product, image: e.target.value });
  
    // Ürün silme fonksiyonu
   // Ürün silme fonksiyonu
const deleteProduct = (id) => {
    axios.delete(`${url}/${id}`)
      .then(() => {
        // Silinen ürünü veri listesinden filtreleyerek kaldırma
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error deleting product:', error));
  }
  
    // Yeni ürün ekleme veya var olan ürünü güncelleme fonksiyonu
    const addOrUpdateProduct = (e) => {
      e.preventDefault();
      if (product.id) {
        updateProduct({ ...product });
      } else {
        addProduct({ ...product });
      }
    }
  
    // Ürün güncelleme fonksiyonu
    const updateProduct = (product) => {
      axios.put(`${url}/${product.id}`, product)
        .then(() => {
          fetchData();
          setProduct({ id: '', name: '', info: '', price: '', image: '' });
        })
        .catch(error => console.error('Error updating product:', error));
    }
  
    // Yeni ürün ekleme fonksiyonu
    const addProduct = (newProduct) => {
      axios.post(url, newProduct)
        .then(() => {
          fetchData();
          setProduct({ id: '', name: '', info: '', price: '', image: '' });
        })
        .catch(error => console.error('Error adding product:', error));
    }
  
    // Ürün düzenleme fonksiyonu
    const editProduct = (product) => setProduct(product);
  
    // Verilerin ilk yükleme işlemi
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <>
        <input type='text' value={product.name} onChange={nameChange} placeholder="Name" />
        <input type='text' value={product.info} onChange={contactChange} placeholder="Info" />
        <input type='text' value={product.price} onChange={titleChange} placeholder="Price" />
        <input type='text' value={product.image} onChange={imageChange} placeholder="Image URL" />
        <button type='submit' onClick={addOrUpdateProduct}>Add/Update</button>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Info</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.info}</td>
                <td>{item.price}</td>
                <td><img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} /></td>
                <td>
                  <button onClick={() => editProduct(item)}>Edit</button>
                  <button onClick={() => deleteProduct(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  


export default Admin ;
