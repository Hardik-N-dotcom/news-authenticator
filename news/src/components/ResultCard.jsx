import React from "react";

const ResultCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mt-4">
      <h3 className="text-xl font-semibold text-gray-800">
        Authenticity Score: <span className="text-blue-600">{data.authenticity}%</span>
      </h3>
      <p className={`mt-2 font-medium ${data.authenticity > 50 ? "text-green-600" : "text-red-600"}`}>
        {data.authenticity > 50 ? "✅ Likely Real" : "❌ Possibly Fake"}
      </p>

      <h4 className="mt-4 font-semibold">Sources:</h4>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {data.sources.map((src, i) => (
          <li key={i}>
            <a href={src} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {src}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;
