
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import "../App.css";

export default function Commercial() {
  const listings = properties.filter(
    (property) => property.type === "Commercial"
  );

  return (
    <main className="listing-page container">
      <Link to="/" className="back-link">← Back Home</Link>

      <header className="listing-header">
        <span className="property-status">COMMERCIAL PROPERTY</span>
        <h1>Spaces for Your Business</h1>
        <p>Explore commercial spaces available in Kanpur.</p>
      </header>

      <div className="property-grid">
        {listings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
