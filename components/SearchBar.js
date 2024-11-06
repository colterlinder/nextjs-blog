import { useState } from "react";

export default function SearchBar({ setSearchQuery }) {
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a product..."
                onChange={handleInputChange}
            />
        </div>
    );
}
