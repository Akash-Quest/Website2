
const locations = [
  {
    city: "USA",
    branch: "",
    company: "SkyQuest Technology Consulting",
    address: "1 Apache Way, Westford, Massachusetts 01886",
    phone: "+1 351-333-4748",
    email: "info@skyquestt.com",
  },
  {
    city: "Ahmedabad, India",
    branch: "",
    company: "SkyQuest Technology Consulting",
    address:
      "D-1001-1005, Swati Clover, Shilaj Circle, Sardar Patel Ring Rd, Thaltej, Ahmedabad, 380054",
    phone: "+1 351-333-4748",
    email: "info@skyquestt.com",
  },
  {
    city: "New Delhi, India",
    branch: "(Branch Office)",
    company: "SkyQuest Technology Consulting",
    address:
      "325, Westend Mall, Near Janakpuri District Centre, Janakpuri, New Delhi-110058",
    phone: "+1 351-333-4748",
    email: "info@skyquestt.com",
  },
  {
    city: "Mauritius",
    branch: "",
    company: "SkyQuest Luminary Limited",
    address:
      "C/O Animo Associates (Mauritius) Limited 8th Floor, The Core, 62 ICT Avenue Cybercity Ebene , PLaines Wilhems, 72201",
    phone: "+1 351-333-4748",
    email: "info@skyquestt.com",
  },
  {
    city: "Ethiopia",
    branch: "",
    company: "SkyQuest Technology Consulting Pvt. Ltd.",
    address:
      "1st Floor, Gara Muleta Building, Bole Wollo Sefer Addis Ababa,Ethiopia",
    phone: "+1 351-333-4748",
    email: "info@skyquestt.com",
  },
];
function LocationsSection() {
  return (
    <section className=" px-4 bg-white">
      <div className="page-container ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-bold mb-2">
            We Are{" "}
            <em>Located At</em>
          </h2>
          <p className="text-muted tracking-wide leading-snug">
            Connecting with you across our global and regional offices.
          </p>
        </div>

        {/* Locations list */}
        <div className="divide-y divide-gray-300 ">
          {locations.map((loc) => (
            <div key={loc.city + loc.address} className="py-4 first:pt-0 ">
              <h3 className="border-b border-gray-300 pb-2 font-semibold  ">
                {loc.city}{" "}
                {loc.branch && (
                  <span className="font-playfair">{loc.branch}</span>
                )}
              </h3>


              <div className="flex flex-col md:flex-row md:items-start md:justify-between mt-2 gap-2 ">
                <div >
                  <h5 className="font-medium text-muted ">{loc.company}</h5>
                  <p className="md:mt:2 2xl:mt-3 mt-2 text-sm text-muted">
                    {loc.address}
                  </p>
                </div>

                {/* <div className="md:text-right">
                  <p className="text-sm text-gray-800 ">{loc.phone}</p>
                  <p className="text-xs text-gray-500 mt:2 md:mt:2 2xl:mt-3 mt-2">{loc.email}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LocationsSection;