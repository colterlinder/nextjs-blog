import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Store.module.css";
import SearchBar from "../components/SearchBar";

export default function Store() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch products from FakeStore API
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Fake Store</title>
            </Head>
            <div className={styles.fakestore}>
                <h1>Fake Store</h1>
                <p>Welcome to the Fake Store!</p>
                <p>Here you'll find a variety of products from the fake store</p>
                
                {/* SearchBar Component */}
                <SearchBar setSearchQuery={setSearchQuery} />

                {/* Products Table */}
                <table className={styles.productTable}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td><img src={product.image} alt={product.title} width="50" /></td>
                                <td>${product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
