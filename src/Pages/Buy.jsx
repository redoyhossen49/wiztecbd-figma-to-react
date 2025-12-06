import React, { useState, useEffect } from "react";
import {
  FiRefreshCw,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { properties } from "../Data/properties";
import RentBudget from "../components/RentBudget";
import { LiaExternalLinkAltSolid, LiaBathSolid } from "react-icons/lia";
import { LuBedDouble } from "react-icons/lu";

export default function Buy() {
  const itemsPerPage = 6;

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeImage, setActiveImage] = useState(0);

  // Filters
  const maxPrice = Math.max(...properties.map((p) => p.price));
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSuburbs, setSelectedSuburbs] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 200, max: maxPrice });
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [sortOrder, setSortOrder] = useState("low");

  // Unique lists
  const suburbs = [...new Set(properties.map((p) => p.suburb))];
  const propertyTypes = [...new Set(properties.flatMap((p) => p.propertyType))];
  const amenitiesList = [...new Set(properties.flatMap((p) => p.amenities))];

  const updateFilter = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  const toggleFilter = (value, setter, array) => {
    if (array.includes(value)) {
      updateFilter(
        setter,
        array.filter((item) => item !== value)
      );
    } else {
      updateFilter(setter, [...array, value]);
    }
  };

  const handleReset = () => {
    setSelectedSuburbs([]);
    setSelectedTypes([]);
    setSelectedAmenities([]);
    setPriceRange({ min: 200, max: 650 });
    setSortOrder("low");
    setCurrentPage(1);
  };

  const clearFilter = (setter) => setter([]);

  // Filtering
  const filteredProperties = properties.filter((p) => {
    const matchSuburb =
      selectedSuburbs.length === 0 || selectedSuburbs.includes(p.suburb);

    const matchType =
      selectedTypes.length === 0 ||
      selectedTypes.some((t) => p.propertyType.includes(t));

    const matchAmenities =
      selectedAmenities.length === 0 ||
      selectedAmenities.some((a) => p.amenities.includes(a));

    const matchBudget = p.price >= priceRange.min && p.price <= priceRange.max;

    return matchSuburb && matchType && matchAmenities && matchBudget;
  });

  // Sorting
  const sortedProperties = [...filteredProperties].sort((a, b) =>
    sortOrder === "low" ? a.price - b.price : b.price - a.price
  );

  // Pagination
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const currentProperties = sortedProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage((prev) => {
      if (totalPages === 0) return 1;
      if (prev > totalPages) return totalPages;
      return prev;
    });
  }, [totalPages]);

  // Modal system
  const openModal = (images) => {
    setSelectedImages(images);
    setActiveImage(0);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () =>
    setActiveImage((p) => (p === selectedImages.length - 1 ? 0 : p + 1));

  const prevImage = () =>
    setActiveImage((p) => (p === 0 ? selectedImages.length - 1 : p - 1));

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 flex flex-col lg:flex-row gap-6">
      {/* SIDEBAR — Mobile full width — Desktop fixed width */}
      <aside className="w-full lg:w-72 bg-white rounded-2xl shadow p-6 space-y-6 h-fit">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-[16px]">Property Preference</h2>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-sm bg-[#F4F6F8] rounded-lg px-3 py-2 text-[#434953]"
          >
            Reset <FiRefreshCw />
          </button>
        </div>

        {/* PRICE RANGE */}
        <RentBudget
          min={200}
          max={maxPrice}
          onChange={(val) => updateFilter(setPriceRange, val)}
        />

        {/* SUBURB */}
        <div className="border p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <p className="font-medium">Suburb</p>
            <button
              onClick={() => clearFilter(setSelectedSuburbs)}
              className="text-black text-2xl"
            >
              -
            </button>
          </div>

          <div className="w-full h-[2px] my-4 bg-gray-300"></div>

          <div className="space-y-2 text-sm">
            {suburbs.map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-purple-700"
                  checked={selectedSuburbs.includes(s)}
                  onChange={() =>
                    toggleFilter(s, setSelectedSuburbs, selectedSuburbs)
                  }
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        {/* PROPERTY TYPE */}
        <div className="border p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <p className="font-medium">Property Type</p>
            <button
              onClick={() => clearFilter(setSelectedTypes)}
              className="text-black text-2xl"
            >
              -
            </button>
          </div>

          <div className="w-full h-[2px] my-4 bg-gray-300"></div>

          <div className="space-y-2 text-sm">
            {propertyTypes.map((t) => (
              <label key={t} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-purple-700"
                  checked={selectedTypes.includes(t)}
                  onChange={() =>
                    toggleFilter(t, setSelectedTypes, selectedTypes)
                  }
                />
                {t}
              </label>
            ))}
          </div>
        </div>

        {/* AMENITIES */}
        <div className="border p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <p className="font-medium">Amenities</p>
            <button
              onClick={() => clearFilter(setSelectedAmenities)}
              className="text-black text-2xl"
            >
              -
            </button>
          </div>

          <div className="w-full h-[2px] my-4 bg-gray-300"></div>

          <div className="space-y-2 text-sm">
            {(showAllAmenities ? amenitiesList : amenitiesList.slice(0, 4)).map(
              (a) => (
                <label key={a} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-purple-700"
                    checked={selectedAmenities.includes(a)}
                    onChange={() =>
                      toggleFilter(a, setSelectedAmenities, selectedAmenities)
                    }
                  />
                  {a}
                </label>
              )
            )}
          </div>

          {amenitiesList.length > 4 && (
            <button
              onClick={() => setShowAllAmenities(!showAllAmenities)}
              className="text-purple-600 text-sm mt-2"
            >
              {showAllAmenities ? "See less" : "See more"}
            </button>
          )}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between  items-center bg-white border border-[#E6E9ED] py-3 px-4 rounded-lg mb-6 gap-3">
          <h2 className="font-semibold text-[20px]">
            Property
            <span className="text-[#697483] text-[16px] font-medium ml-2">
              — Showing results ({filteredProperties.length})
            </span>
          </h2>

          <div className="bg-[#F4F6F8] px-3 py-2 rounded-lg">
            <label className="text-[12px] text-[#697483]">Sort by:</label>
            <select
              value={sortOrder}
              onChange={(e) => updateFilter(setSortOrder, e.target.value)}
              className="bg-transparent text-[16px] focus:ring-0"
            >
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>

        {/* PROPERTY CARDS GRID (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {currentProperties.length === 0 ? (
            <p className="text-center w-full text-gray-500">
              No properties found.
            </p>
          ) : (
            currentProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow w-full overflow-hidden"
              >
                <div
                  className="h-48 bg-gray-300 cursor-pointer"
                  onClick={() => openModal(property.images)}
                >
                  <img
                    src={property.images[0]}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex gap-4 items-center text-gray-500 text-sm">
                    <p className="flex items-center gap-1">
                      <LuBedDouble /> Bed: {property.specs.bed}
                    </p>
                    <p className="flex items-center gap-1">
                      <LiaBathSolid /> Bathroom: {property.specs.bath}
                    </p>
                    <p className="flex items-center gap-1">
                      <LiaExternalLinkAltSolid /> {property.specs.sqft} sqft
                    </p>
                  </div>

                  <h3 className="font-semibold">{property.title}</h3>

                  <p className="text-gray-500 text-sm">
                    <span className="text-black text-lg font-semibold">
                      ${property.price}
                    </span>{" "}
                    /{property.priceType} · {property.location}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className={`px-3 py-2 rounded-lg shadow ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-purple-600 hover:text-white"
              }`}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg shadow ${
                    currentPage === page
                      ? "bg-purple-600 text-white"
                      : "bg-white hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              className={`px-3 py-2 rounded-lg shadow ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-purple-600 hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* IMAGE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-4 rounded-2xl shadow-2xl w-full max-w-4xl relative">
            <button
              onClick={closeModal}
              className="absolute top-[-12px] right-[-12px] bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
            >
              <FiX size={22} />
            </button>

            <div className="relative">
              <img
                src={selectedImages[activeImage]}
                className="w-full h-[420px] object-cover rounded-xl"
              />

              <button
                onClick={prevImage}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
              >
                <FiChevronLeft size={22} />
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
              >
                <FiChevronRight size={22} />
              </button>
            </div>

            <div className="flex gap-4 justify-center mt-4 overflow-x-auto pb-1">
              {selectedImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2 ${
                    activeImage === i
                      ? "border-purple-700"
                      : "border-transparent opacity-70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
