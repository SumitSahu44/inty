import intera from "../../assets/interra.png";
import architect from "../../assets/architect.png";
import banner from "../../assets/banner.png";
import chair from "../../assets/chair.png";
import Carousel from "../../components/TableCorousel/Tablecorousel";

export default function ComparisonTable() {
  const data = [
    {
      image: intera,
      headerColor: "bg-teal-400",
      columnColor: "bg-teal-200",
      textColor: "text-red-500",
      team: "Yes",
      chair: chair, // You can keep it here or remove it, as the carousel will replace this
    },
    {
      image: architect,
      headerColor: "bg-orange-400",
      columnColor: "bg-orange-200",
      textColor: "text-orange-600",
      team: "Yes",
      chair: chair, // You can keep it here or remove it
    },
    {
      image: banner,
      headerColor: "bg-blue-400",
      columnColor: "bg-blue-200",
      textColor: "text-blue-600",
      team: "No",
      chair: chair, // You can keep it here or remove it
    },
  ];

  const details = [
    { label: "Average project duration", value: "9 months" },
    { label: "Talent fees", value: "25-70%" },
    { label: "Client quality guarantee", value: "Pre-vetted" },
    { label: "Work in teams", key: "team" },
    { label: "Branches", value: "1" },
    { label: "Year Of Experience", value: "10+" },
    { label: "No. of Projects", value: "1000+" },
    { label: "Images", key: "chair" }, // Keep this the same
  ];

  return (
    <div className="max-w-6xl h-auto mx-auto p-4 ">
      {/* Header Row */}
      <div className="grid grid-cols-4 text-center gap-[19px]">
        <div className="p-4 bg-white font-bold"></div>
        {data.map((item, idx) => (
          <div key={idx} className={`p-4 ${item.headerColor} flex items-center justify-center h-20 rounded-md`}>
            <img src={item.image} alt="Company Logo" className="h-16 w-auto" />
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {details.map((row, rowIndex) => (
        <div key={rowIndex} className={`grid grid-cols-4 gap-[19px] ${rowIndex === 0 ? '' : 'border-t-2 border-teal-800'}`}> 
          <div className="bg-white font-bold flex items-center justify-start">
            {row.label}
          </div>
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-4 ${item.columnColor} flex items-center justify-center font-semibold ${rowIndex === details.length - 1 ? 'rounded-b-md' : ''}`}
            >
              {row.key ? (
                row.key === "chair" ? (
                  <Carousel /> 
                ) : (
                  item[row.key]
                )
              ) : (
                row.value
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

