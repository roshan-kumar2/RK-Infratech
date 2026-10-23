
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import "../App.css";

export default function Buy() {
  const listings = properties.filter(
    (property) => property.type === "For Sale"
  );

  return (
    <main className="listing-page container">
      <Link to="/" className="back-link">← Back Home</Link>

      <header className="listing-header">
        <span className="property-status">BUY PROPERTY</span>
        <h1>Find Your Dream Property</h1>
        <p>Explore homes and plots available for sale in Kanpur.</p>
      </header>

      <div className="property-grid">
        {listings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
