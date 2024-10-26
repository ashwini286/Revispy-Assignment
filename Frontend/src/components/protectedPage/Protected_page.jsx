// src/components/InterestSelector.js

import React, { useState } from "react";

const Protected_page = () => {
    // Initial interests list
    const allInterests = [
        { name: "Shoes", key: "shoes" },
        { name: "Men T-shirts", key: "menTshirts" },
        { name: "Makeup", key: "makeup" },
        { name: "Jewellery", key: "jewellery" },
        { name: "Women T-shirts", key: "womenTshirts" },
        { name: "Furniture", key: "furniture" },
        { name: "Watches", key: "watches" },
        { name: "Bags", key: "bags" },
        { name: "Sunglasses", key: "sunglasses" },
        { name: "Electronics", key: "electronics" },
        { name: "Books", key: "books" },
        { name: "Home Decor", key: "homeDecor" },
        { name: "Gardening", key: "gardening" },
        { name: "Sports Equipment", key: "sportsEquipment" },
        { name: "Outdoor Gear", key: "outdoorGear" },
        { name: "Pet Supplies", key: "petSupplies" },
        { name: "Beauty Products", key: "beautyProducts" },
        { name: "Toys", key: "toys" },
        { name: "Kitchen Appliances", key: "kitchenAppliances" },
        { name: "Groceries", key: "groceries" },
        { name: "Health & Wellness", key: "healthWellness" },
        { name: "Car Accessories", key: "carAccessories" },
        { name: "Fitness Equipment", key: "fitnessEquipment" },
        { name: "Music Instruments", key: "musicInstruments" },
        { name: "Art Supplies", key: "artSupplies" },
        { name: "Office Supplies", key: "officeSupplies" },
        { name: "Gaming", key: "gaming" },
        { name: "Stationery", key: "stationery" },
        { name: "Travel Accessories", key: "travelAccessories" },
        { name: "Photography Gear", key: "photographyGear" },
      ];
      

    const itemsPerPage = 6; // Number of interests per page
    const totalPages = Math.ceil(allInterests.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [interests, setInterests] = useState({
        shoes: true,
        menTshirts: false,
        makeup: true,
        jewellery: true,
        womenTshirts: false,
        furniture: true,
        watches: false,
        bags: false,
        sunglasses: false,
        electronics: false,
        Books: false,
        HomeDecor: false,
        Gardening: false,
        SportsEquipment: false,
        OutdoorGear: false,
        PetSupplies: false,
        BeautyProducts: false,
        Toys:false,
        KitchenAppliances: false,
        Groceries:false,
        HealthWellness: false,
        CarAccessories: false,
        FitnessEquipment: false,
        MusicInstruments: false,
        ArtSupplies:false,
        OfficeSupplies:false,
        Gaming:false,
        Stationery:false,
        TravelAccessories:false,
        PhotographyGear:false,

    });

    // Function to handle checkbox changes
    const handleCheckboxChange = (interestKey) => {
        setInterests((prev) => ({
            ...prev,
            [interestKey]: !prev[interestKey],
        }));
    };

    // Function to get the interests for the current page
    const getPaginatedInterests = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return allInterests.slice(startIndex, startIndex + itemsPerPage);
    };

    // Function to change pages
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex items-center justify-center pt-4 bg-gray-100">
            <div className=" w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-center">Please mark your interests!</h2>
                <p className="text-gray-500 mb-2 text-center">We will keep you notified.</p>
<br></br>
                <div className="mb-2 ml-12">
                    <h3 className="text-lg font-medium mb-2">My saved interests!</h3>
                    <div className="flex flex-col items-start  space-y-4">
                        {getPaginatedInterests().map((interest) => (
                            <label key={interest.key} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={interests[interest.key]}
                                    onChange={() => handleCheckboxChange(interest.key)}
                                    className="form-checkbox h-5 w-5 bg-black"
                                />
                                <span>{interest.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pagination controls */}
                <div className="flex space-x-1 justify-center items-center">
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className={`text-blue-500 ${currentPage === 1 ? "opacity-50" : ""}`}
                    >
                        &lt;&lt;
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-2 ${currentPage === i + 1 ? "text-blue-600 font-bold" : "text-gray-500"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`text-blue-500 ${currentPage === totalPages ? "opacity-50" : ""}`}
                    >
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Protected_page;
