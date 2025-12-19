"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const CACHE_EXPIRATION_MS = 60 * 60 * 1000;

const Gallery: React.FC = () => {
  const initialGalleryImages = [
    {
      id: 1,
      src: "https://drive.google.com/uc?export=view&id=1wCCLHVT9Ns9r_gRhNpWc60fbLEQhyKTA",
      alt: "Mixer",
    },
    {
      id: 2,
      src: "https://drive.google.com/uc?export=view&id=1C1FtKzzHlobf9kQRS1XjFoPWx1SKTSS8",
      alt: "IndustrialRobots",
    },
    {
      id: 3,
      src: "https://drive.google.com/uc?export=view&id=1-30m_3aG9Xqpwi0AbgjHd55s2a6dGvhM",
      alt: "Foundary",
    },
    {
      id: 4,
      src: "https://drive.google.com/uc?export=view&id=1txzHviodjayVGIdK19xkGsVCpf3FKAL1",
      alt: "Incernator",
    },
    {
      id: 5,
      src: "https://drive.google.com/uc?export=view&id=1d52YS5EnJL_h3_HhDp3NymXZrrHbgf2w",
      alt: "Treatment",
    },
    {
      id: 6,
      src: "https://drive.google.com/uc?export=view&id=1HgSmKAYGggF-R13A83xXIcGpYCVrTt24",
      alt: "Wire Stranding",
    },
    {
      id: 7,
      src: "https://drive.google.com/uc?export=view&id=1Y8us2yl1BH9uZkfbd4cpWzh2GOF07bzA",
      alt: "Special Purpose",
    },
    {
      id: 8,
      src: "https://drive.google.com/uc?export=view&id=1wCCLHVT9Ns9r_gRhNpWc60fbLEQhyKTA",
      alt: "Mixer",
    },
    {
      id: 9,
      src: "https://drive.google.com/uc?export=view&id=1h2u0xLyN3RH6Hs1Ei1NtpFHDWbvvmb9u",
      alt: "TTR",
    },
    {
      id: 10,
      src: "https://drive.google.com/uc?export=view&id=17bM4LNNJ7N2W8AISy4CIVDo7S8_dL3PA",
      alt: "Rubber Winding Machine",
    },
  ];

  const [galleryImages, setGalleryImages] =
    useState<{ id: number; src: string; alt: string }[]>(initialGalleryImages);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Fetch gallery images from the database
   // 1 hour

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const cachedGalleryImages = localStorage.getItem("galleryImages");
      const cachedTimestamp = localStorage.getItem("cacheTimestamp");

      // if (cachedGalleryImages && cachedTimestamp) {
      //   const now = new Date().getTime();
      //   const cacheAge = now - parseInt(cachedTimestamp, 10);

      //   if (cacheAge < CACHE_EXPIRATION_MS) {
      //     setGalleryImages(JSON.parse(cachedGalleryImages));
      //     setLoading(false);
      //     return;
      //   }
      // }

      try {
        const response = await axios.get("/api/content/gallery");
        const galleryData = response.data.content.galleryImages;
        setGalleryImages(galleryData);

        localStorage.setItem("galleryImages", JSON.stringify(galleryData));
        localStorage.setItem("cacheTimestamp", new Date().getTime().toString());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        const response = await axios.get(
          "https://script.googleusercontent.com/macros/echo?user_content_key=uiKNXkAJCgZY8p_6JuThU1BWEtVngPVh_j6UGiztz5ENnBNwM-ZXyRn-TcSsaQBYZaCB1yMgwNyStdSjtdJ2YNotXehC9fY4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJTwMJZnWSxTM3TdZybefEV_oyLs55Xlori6jebIPmUq1k1Kole8MtZQuK9A_3FJIh41psCCXoaBR0iCy3D9Iai_2Ybj-VDT3A&lib=MCbCGb8vc5tMgqiebKsQrMPZ1uKL4_q0K"
        );
        const galleryData = response.data.content.galleryImages;
        setGalleryImages(galleryData);
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mx-auto px-4 py-8 bg-white">
      {/* Gallery Title */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-medium mb-4">Gallery</h2>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-lg">Loading images...</p>}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div
          key={image.id}
          className="relative group overflow-hidden rounded-lg w-full bg-gray-200"
          style={{ paddingBottom: "100%" }} // Ensures the card maintains a square shape
          onClick={() => handleImageClick(image.src, image.alt)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center sm:py-0 lg:py-3">
            <span className="text-lg lg:text-lg sm:text-sm font-semibold">{image.alt}</span>
          </div>
        </div>
        
        ))}
      </div>

      {/* Lightbox for Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={800}
            height={800}
            className="max-w-full max-h-[80vh] object-contain"
          />
          <p className="text-white text-center mt-4 text-lg">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
