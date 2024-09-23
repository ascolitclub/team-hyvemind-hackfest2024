import React, { useState, useCallback } from 'react';
import Webcam from 'react-webcam';

export default function Register() {
  const [ownerPhoto, setOwnerPhoto] = useState(null);
  const [ownerPhotoURL, setOwnerPhotoURL] = useState(null);
  const [hostelPhoto, setHostelPhoto] = useState(null);
  const [hostelPhotoURL, setHostelPhotoURL] = useState(null);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const webcamRef = React.useRef(null);

  // Handle the owner photo upload from file
  const handleOwnerPhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setOwnerPhoto(file);
      setOwnerPhotoURL(URL.createObjectURL(file));
    }
  };

  // Handle hostel photo upload from file
  const handleHostelPhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setHostelPhoto(file);
      setHostelPhotoURL(URL.createObjectURL(file));
    }
  };

  // Handle the photo taken by webcam
  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setOwnerPhotoURL(imageSrc);
    setIsCameraOpen(false); // Close webcam modal after capturing
  }, [webcamRef]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Owner Photo: ", ownerPhoto);
    console.log("Hostel Photo: ", hostelPhoto);
  };

  // Remove owner photo
  const removeOwnerPhoto = () => {
    setOwnerPhoto(null);
    setOwnerPhotoURL(null);
  };

  // Remove hostel photo
  const removeHostelPhoto = () => {
    setHostelPhoto(null);
    setHostelPhotoURL(null);
  };

  return (
    <>
      <div className="h-auto container mx-auto px-12">
        <div className="flex justify-center py-10">
          <div className="bg-[#C4DFF2] text-black rounded-2xl p-8 mt-10 h-fit bg-gradient-to-br from-[#C4DFEF] to-[#ffffff] shadow-2xl">
            <h1 className="text-center text-[#6A2DE9] font-bold text-4xl">Registration</h1>
            <form className="form text-md" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="input-box mt-6">
                <label className="flex w-full text-md font-semibold">Full Name</label>
                <input
                  className="w-full text-black outline-none pl-2 py-1 rounded-md"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="input-box mt-4">
                <label className="flex w-full text-md font-semibold">Email Address</label>
                <input
                  className="w-full text-black outline-none pl-2 py-1 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number and Address */}
              <div className="w-full column flex mt-4">
                <div className="input-box w-full mr-3">
                  <label className="font-semibold">Phone Number</label>
                  <input
                    className="text-black w-full outline-none pl-3 py-1 rounded-md"
                    type="number"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="input-box w-full ml-3">
                  <label className="flex w-full font-semibold">Address</label>
                  <input
                    className="text-black w-full outline-none pl-3 py-1 rounded-md"
                    type="text"
                    placeholder="Enter your address"
                    required
                  />
                </div>
              </div>

              {/* Hostel Data */}
              <div className="address mt-4 w-full font-semibold">
                <label>Hostel Data:</label>
                <div className="column flex gap-5 w-full mb-1">
                  <div className="input-box w-full mr-1">
                    <label className="font-normal text-md">Hostel Name</label>
                    <input
                      className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                      type="text"
                      placeholder="Enter Hostel Name"
                      required
                    />
                  </div>
                  <div className="input-box w-full">
                    <label className="font-normal text-md">Pan Number</label>
                    <input
                      className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                      type="text"
                      placeholder="Enter Pan Number"
                      required
                    />
                  </div>
                </div>
                <div className="input-box w-full">
                  <label className="font-normal text-md">No. of Hostelers</label>
                  <input
                    className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                    type="text"
                    placeholder="Number of Hostelers"
                    required
                  />
                </div>
                <div className="input-box w-full">
                  <label className="font-normal text-md">Description</label>
                  <textarea
                    className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                    placeholder="which education faculty member stay here"
                    required
                  />
                </div>

                {/* Photo Uploads */}
                <div className="input-box flex gap-2 items-center mt-4">
                  <label className="font-normal text-md">Photo of Owner</label>
                  {!ownerPhotoURL && (
                    <>
                      <button
                        type="button"
                        className="bg-blue-500 text-white text-sm p-2 rounded-md"
                        onClick={() => setShowUploadOptions(true)}
                      >
                        Choose Photo
                      </button>
                    </>
                  )}

                  {ownerPhotoURL && (
                    <div className="relative mt-3">
                      <img src={ownerPhotoURL} alt="Owner" className="w-24 h-24 object-cover rounded" />
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white h-5 w-5 rounded-full"
                        onClick={removeOwnerPhoto}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>

                <div className="input-box flex gap-2 items-center mt-4">
                  <label className="font-normal text-md">Photo of Hostel</label>
                  {!hostelPhotoURL && (
                    <>
                      <button
                        type="button"
                        className="bg-blue-500 text-white p-2 text-sm rounded-md"
                        onClick={() => document.getElementById('hostelFileUpload').click()}
                      >
                        Upload Hostel Photo
                      </button>
                    </>
                  )}

                  {hostelPhotoURL && (
                    <div className="relative mt-3">
                      <img src={hostelPhotoURL} alt="Hostel" className="w-24 h-24 object-cover rounded" />
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white h-5 w-5 rounded-full"
                        onClick={removeHostelPhoto}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="">
                <button
                  type="submit"
                  className="bg-[--primary-color] p-4 text-2xl w-full mt-8 rounded-lg font-semibold text-white"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for upload options */}
      {showUploadOptions && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Choose an Option</h2>
            <button
              className="bg-blue-500 text-white p-2 rounded-md mb-4 w-full"
              onClick={() => {
                setShowUploadOptions(false);
                document.getElementById('ownerFileUpload').click();
              }}
            >
              Upload Photo
            </button>
            <button
              className="bg-green-500 text-white p-2 rounded-md w-full"
              onClick={() => {
                setIsCameraOpen(true);
                setShowUploadOptions(false);
              }}
            >
              Take Photo
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-md w-full mt-4"
              onClick={() => setShowUploadOptions(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        type="file"
        id="ownerFileUpload"
        className="hidden"
        accept="image/*"
        onChange={handleOwnerPhotoChange}
      />
      <input
        type="file"
        id="hostelFileUpload"
        className="hidden"
        accept="image/*"
        onChange={handleHostelPhotoChange}
      />

      {/* Webcam Modal */}
      {isCameraOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Take Photo</h2>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-64 rounded-lg"
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md mt-4"
              onClick={capturePhoto}
            >
              Capture Photo
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-md mt-4"
              onClick={() => setIsCameraOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
