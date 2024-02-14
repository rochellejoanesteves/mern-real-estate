import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

function ListingCard({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[340px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0] || 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
          alt="Listing Image"
          className="h-[300px] sm:[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold flex items-center">
            ${listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}

              {
                listing.type === "rent" && "/month"
              }
          </p>
          <div className="flex gap-4 text-slate-700">
            <p className="text-xs font-bold ">{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `${listing.bathrooms} Bed`}</p>
            <p className="text-xs font-bold">{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : `${listing.bathrooms} Bath`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
