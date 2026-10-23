import { properties } from "./data/properties";
import { useState } from "react";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, Search,
  ShieldCheck, KeyRound, Building2, Users, Clock3,
  CheckCircle2, BedDouble, Bath, Ruler, MessageCircle
} from "lucide-react";
import "./App.css";

const services = [
  {
    icon: KeyRound,
    title: "Buy Property",
    description: "Find your dream home or investment property."
  },
  {
    icon: Building2,
    title: "Rent Property",
    description: "Apartments, houses and commercial spaces."
  },
  {
    icon: Users,
    title: "Commercial Spaces",
    description: "Shops, offices, showrooms and business spaces."
  },
  {
    icon: ShieldCheck,
    title: "Property Management",
    description: "Complete management for property owners."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [searchType, setSearchType] = useState("All");
  const [location, setLocation] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [enquiry, setEnquiry] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  
const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");
const [minBeds, setMinBeds] = useState("0");

  
const filteredProperties = properties.filter((property) => {
  const matchesTab =
    activeTab === "Featured" ||
    activeTab === "View All" ||
    property.type === activeTab;

  const matchesType =
    searchType === "All" || property.type === searchType;

  const matchesLocation = property.location
    .toLowerCase()
    .includes(location.toLowerCase());

  // Compare numeric amounts; sale and rental budgets are separate.
  const numericPrice = Number(
    property.price.replace(/[^\d]/g, "")
  );

  const matchesMinPrice =
    minPrice === "" || numericPrice >= Number(minPrice);

  const matchesMaxPrice =
    maxPrice === "" || numericPrice <= Number(maxPrice);

  const matchesBeds =
    property.beds >= Number(minBeds);

  return (
    matchesTab &&
    matchesType &&
    matchesLocation &&
    matchesMinPrice &&
    matchesMaxPrice &&
    matchesBeds
  );
});
  function openEnquiry(property = null) {
    setSelectedProperty(property);
    setEnquiry(true);
  }

  
function submitEnquiry(event) {
  event.preventDefault();

  const propertyName = selectedProperty?.title || "General enquiry";
  const propertyLocation = selectedProperty?.location || "Not specified";
  const propertyPrice = selectedProperty?.price || "Not specified";

  const subject = encodeURIComponent(
    `Property enquiry: ${propertyName}`
  );

  const body = encodeURIComponent(
    `Name: ${form.name}
Phone: ${form.phone}
Property: ${propertyName}
Location: ${propertyLocation}
Price: ${propertyPrice}

Message:
${form.message}`
  );

  window.location.href =
    `mailto:info@rkinfratech.com?subject=${subject}&body=${body}`;
}


  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Phone size={13} /> +91 98765 43210</span>
          <span><Mail size={13} /> info@rkinfratech.com</span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <span className="brand-mark">RK</span>
            <span className="brand-name">
              RK <strong>INFRATECH</strong>
              <small>YOUR PROPERTY PARTNER</small>
            </span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>

         
<nav className={mobileMenu ? "nav-links open" : "nav-links"}>
  {[
    ["Home", "/"],
    ["Buy", "/buy"],
    ["Rent", "/rent"],
    ["Commercial", "/commercial"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Contact", "#contact"]
  ].map(([label, href]) => (
    <a
      href={href}
      key={label}
      onClick={() => {
        setMobileMenu(false);
      }}
    >
      {label}
    </a>
  ))}
</nav>


          <button className="btn btn-gold nav-cta" onClick={() => openEnquiry()}>
            List Property
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <span className="eyebrow">WELCOME TO RK INFRATECH</span>
            <h1>
              Find Your<br />
              Perfect Property<br />
              with RK Infratech
            </h1>
            <p>
              Buy | Sell | Rent | Commercial | Property Management
            </p>

            <div className="search-panel">
              <div className="search-tabs">
                {["Buy", "Rent", "Commercial"].map((tab) => (
                  <button
                    key={tab}
                    className={
                      (tab === "Buy" && searchType === "For Sale") ||
                      (tab === "Rent" && searchType === "For Rent") ||
                      (tab === "Commercial" && searchType === "Commercial")
                        ? "selected"
                        : ""
                    }
                    onClick={() => {
                      setSearchType(
                        tab === "Buy"
                          ? "For Sale"
                          : tab === "Rent"
                          ? "For Rent"
                          : "Commercial"
                      );
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <form
                className="search-fields"
                onSubmit={(event) => {
                  event.preventDefault();
                  setActiveTab("View All");
                  document.getElementById("properties")?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                <input
                  aria-label="Location"
                  placeholder="Location (e.g. Kanpur)"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
                <button className="btn btn-gold" type="submit">
                  <Search size={16} /> Search
                </button>
              </form>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="container trust-row">
              <div><ShieldCheck /><span><b>Verified Properties</b><small>Genuine Listings</small></span></div>
              <div><KeyRound /><span><b>Best Deals</b><small>Competitive Prices</small></span></div>
              <div><Users /><span><b>Expert Guidance</b><small>From Start to Finish</small></span></div>
              <div><CheckCircle2 /><span><b>End-to-End Support</b><small>Even After Sale</small></span></div>
            </div>
          </div>
        </section>

        <section className="section container" id="properties">
          <div className="section-heading">
            <div>
              <span className="eyebrow gold-text">FIND YOUR SPACE</span>
              <h2>Explore Our Properties</h2>
              <p>Discover a property that feels like home.</p>
            </div>
            <button
              className="text-link"
              onClick={() => setActiveTab("View All")}
            >
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="property-tabs">
            {["Featured", "For Sale", "For Rent", "Commercial"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => {
                  setActiveTab(tab);
                  setSearchType("All");
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          
<div className="property-grid">
  {filteredProperties.map((property) => (
    <article className="property-card" key={property.id}>
      <button
        className="property-image"
        onClick={() =>
          window.location.assign(`/property/${property.id}`)
        }
        aria-label={`View ${property.title}`}
      >
        <img src={property.image} alt={property.title} />
        <span className="property-badge">{property.type}</span>
      </button>

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

        <button
          className="card-action"
          onClick={() =>
            window.location.assign(`/property/${property.id}`)
          }
        >
          View Details <ArrowRight size={15} />
        </button>
      </div>
    </article>
  ))}
</div>


          {filteredProperties.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <h3>No matching properties found</h3>
              <p>Try another location or select a different category.</p>
              <button
                className="btn btn-gold"
                onClick={() => {
                  setLocation("");
                  setSearchType("All");
                  setActiveTab("View All");
                }}
              >
                Show All Properties
              </button>
            </div>
          )}
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div><Users /><strong>500+</strong><span>Happy Clients</span></div>
            <div><Building2 /><strong>1000+</strong><span>Properties Listed</span></div>
            <div><Clock3 /><strong>5+</strong><span>Years Experience</span></div>
            <div><ShieldCheck /><strong>95%</strong><span>Client Satisfaction</span></div>
          </div>
        </section>

        <section className="section container" id="services">
          <div className="section-heading">
            <div>
              <span className="eyebrow gold-text">WHAT WE DO</span>
              <h2>Our Services</h2>
              <p>Real estate solutions designed around you.</p>
            </div>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, description }) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="text-link" onClick={() => openEnquiry()}>
                  Explore <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="container sell-banner">
          <div className="sell-image"></div>
          <div className="sell-content">
            <span className="eyebrow">PROPERTY OWNERS</span>
            <h2>Looking to Sell or Rent<br />Your Property?</h2>
            <p>Get the best value with RK Infratech. We connect you with genuine buyers and tenants.</p>
            <button className="btn btn-gold" onClick={() => openEnquiry()}>
              List Your Property <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <div>
              <span className="eyebrow gold-text">WHY RK INFRATECH</span>
              <h2>Property Decisions Made Easier</h2>
            </div>
          </div>
          <div className="benefits-grid">
            <div><ShieldCheck /><h3>Local Market Expertise</h3><p>Knowledge of Kanpur neighbourhoods and property trends.</p></div>
            <div><CheckCircle2 /><h3>Verified & Legal Support</h3><p>Guidance with property documents and due diligence.</p></div>
            <div><Users /><h3>Personalised Service</h3><p>Solutions tailored to your requirements and budget.</p></div>
            <div><KeyRound /><h3>Transparent Process</h3><p>Clear communication at every step of your journey.</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <span className="eyebrow">LET'S FIND YOUR NEXT PROPERTY</span>
              <h2>Ready to Find Your Next Property?</h2>
              <p>Get in touch with our team and take the next step.</p>
            </div>
            <div className="contact-actions">
              <button className="btn btn-gold" onClick={() => openEnquiry()}>
                Get in Touch
              </button>
              <a
                className="btn btn-whatsapp"
                href="https://wa.me/919876543210?text=Hello%20RK%20Infratech%2C%20I%20am%20interested%20in%20a%20property."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="brand">
            <span className="brand-mark">RK</span>
            <span className="brand-name">RK <strong>INFRATECH</strong><small>YOUR PROPERTY PARTNER</small></span>
          </a>
          <p>Buy. Sell. Rent. Your property journey starts here.</p>
          <p>© {new Date().getFullYear()} RK Infratech. All rights reserved.</p>
        </div>
      </footer>

      {selectedProperty && (
        <div className="modal-backdrop" onClick={() => setSelectedProperty(null)}>
          <div className="modal property-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProperty(null)} aria-label="Close">
              <X />
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} />
            <div className="modal-body">
              <span className="eyebrow gold-text">{selectedProperty.type}</span>
              <h2>{selectedProperty.title}</h2>
              <p><MapPin size={15} /> {selectedProperty.location}</p>
              <h3 className="property-price">{selectedProperty.price}</h3>
              <div className="property-meta">
                {selectedProperty.beds > 0 && <span><BedDouble /> {selectedProperty.beds} Beds</span>}
                {selectedProperty.baths > 0 && <span><Bath /> {selectedProperty.baths} Baths</span>}
                <span><Ruler /> {selectedProperty.area}</span>
              </div>
              <p>Contact RK Infratech for property availability, complete details, pricing and a site visit.</p>
              <button className="btn btn-gold full-btn" onClick={() => openEnquiry(selectedProperty)}>
                Enquire About This Property <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {enquiry && (
        <div className="modal-backdrop" onClick={() => setEnquiry(false)}>
          <div className="modal enquiry-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setEnquiry(false)} aria-label="Close">
              <X />
            </button>
            <span className="eyebrow gold-text">RK INFRATECH</span>
            <h2>{selectedProperty ? "Property Enquiry" : "Let's Get in Touch"}</h2>
            <p>Share your details and prepare an enquiry through your email app.</p>
            <form onSubmit={submitEnquiry}>
              <label>Your Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" /></label>
              <label>Phone Number<input required type="tel" pattern="[0-9+ ()-]{8,18}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Enter your phone number" /></label>
              <label>Message<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={selectedProperty ? `I'm interested in ${selectedProperty.title}` : "Tell us what property you need"} /></label>
              <button className="btn btn-gold full-btn" type="submit">Continue via Email <ArrowRight size={16} /></button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;