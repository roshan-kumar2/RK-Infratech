
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  MessageCircle,
  ShieldCheck
} from "lucide-react";

import { properties } from "../data/properties";
import { openWhatsApp } from "../utils/whatsapp";
import "../App.css";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => String(item.id) === id
  );

  // Handle an invalid property ID
  if (!property) {
    return (
      <main className="property-details">
        <h1>Property Not Found</h1>

        <p>
          Sorry, this property listing could not be found.
        </p>

        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </main>
    );
  }

  // Prepare a personalised WhatsApp enquiry
  const handleWhatsAppEnquiry = () => {
    const message = [
      "Hello RK Infratech!",
      "",
      "I am interested in the following property:",
      `Property: ${property.title}`,
      `Location: ${property.location}`,
      `Listed Price: ${property.price}`,
      `Property Type: ${property.type}`,
      `Area: ${property.area}`,
      "",
      "Please share more details about availability, property documents, and viewing arrangements."
    ].join("\n");

    openWhatsApp(message);
  };

  return (
    <main className="property-details">
      {/* Back navigation */}
      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      {/* Property heading and price */}
      <div className="property-details-heading">
        <div>
          <span className="property-status">
            {property.type}
          </span>

          <h1>{property.title}</h1>

          <p>
            <MapPin size={17} />
            {property.location}
          </p>
        </div>

        <h2>{property.price}</h2>
      </div>

      {/* Main property image */}
      <img
        className="property-details-image"
        src={property.image}
        alt={`${property.title} in ${property.location}`}
      />

      {/* Property information and contact section */}
      <div className="property-details-grid">
        <section className="property-details-content">
          <h2>Property Overview</h2>

          <p>
            Explore this{" "}
            {property.title.toLowerCase()} in{" "}
            {property.location}. Contact RK Infratech to
            confirm availability, pricing, property
            specifications, and viewing arrangements.
          </p>

          {/* Property specifications */}
          <div className="property-specifications">
            {property.beds > 0 && (
              <span>
                <BedDouble size={20} />
                {property.beds} Bedrooms
              </span>
            )}

            {property.baths > 0 && (
              <span>
                <Bath size={20} />
                {property.baths} Bathrooms
              </span>
            )}

            <span>
              <Ruler size={20} />
              {property.area}
            </span>
          </div>

          {/* Customer benefits */}
          <h2>Why Enquire With Us?</h2>

          <ul className="property-features-list">
            <li>
              <ShieldCheck size={18} />
              Assistance with property enquiries
            </li>

            <li>
              <ShieldCheck size={18} />
              Arrange a property visit
            </li>

            <li>
              <ShieldCheck size={18} />
              Discuss pricing and availability
            </li>
          </ul>

          {/* Listing disclaimer */}
          <p className="property-disclaimer">
            Listing details are provided for demonstration.
            Verify the property's availability, price,
            ownership documents, and specifications before
            proceeding.
          </p>
        </section>

        {/* Enquiry card */}
        <aside className="property-contact-card">
          <h3>Interested in This Property?</h3>

          <p>
            Contact our team for more information or to
            arrange a visit.
          </p>

          {/* WhatsApp enquiry button */}
          <button
            type="button"
            className="property-contact-button"
            onClick={handleWhatsAppEnquiry}
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </button>

          {/* Callback navigation */}
          <Link
            className="property-contact-secondary"
            to="/#contact"
          >
            Request a Callback
          </Link>
        </aside>
      </div>
    </main>
  );
}
