import React, { useState } from "react";
import { certificates } from "../constants";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="scroll-mt-24 py-16 bg-white text-black max-w-7xl mx-auto px-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
        CERTIFICATES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer bg-gray-100 rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center gap-4 mb-4">
              {cert.logo && (
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-12 h-12 object-contain rounded-full border border-gray-300"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">{cert.date}</div>
            <p className="text-gray-700 text-sm">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden p-4 max-w-3xl w-full relative animate-fadeIn shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500 text-xl font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>
            <img
              src={selectedCert.logo}
              alt={selectedCert.title}
              className="w-full object-contain rounded"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{selectedCert.title}</h2>
              <p className="text-gray-600 text-sm">{selectedCert.issuer}</p>
              <p className="text-gray-500 text-sm">{selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
