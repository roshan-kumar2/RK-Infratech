
import { Link } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  ArrowRight,
} from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <article className="property-card" key={property.id}>
      <Link
        to={`/property/${property.id}`}
        className="property-image"
        aria-label={`View ${property.title}`}
      >
        <img src={property.image} alt={property.title} />
        <span className="property-badge">{property.type}</span>
      </Link>

      <div className="property-info">
        <h3>{property.title}</h3>

        <p className="property-location">
          <MapPin size={13} /> {property.location}
        </p>

        <strong className="property-price">{property.price}</strong>

        <div className="property-meta">
          {property.beds > 0 && (
            <span><BedDouble /> {property.beds} Beds</span>
          )}

          {property.baths > 0 && (
            <span><Bath /> {property.baths} Baths</span>
          )}

          <span><Ruler /> {property.area}</span>
        </div>

        <Link className="card-action" to={`/property/${property.id}`}>
          View Details <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
