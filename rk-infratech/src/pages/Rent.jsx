
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import "../App.css";

export default function Rent() {
  const listings = properties.filter(
    (property) => property.type === "For Rent"
  );

  return (
    <main className="listing-page container">
      <Link to="/" className="back-link">← Back Home</Link>

      <header className="listing-header">
        <span className="property-status">RENT PROPERTY</span>
        <h1>Find Your Next Home</h1>
        <p>Discover rental properties in Kanpur.</p>
      </header>

      <div className="property-grid">
        {listings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
