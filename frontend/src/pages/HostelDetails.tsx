import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { RenderStar } from '../components/dynamic renderer/RenderStar';

// Hostel data (unchanged)
const hostelData = [
    {
      img: "/public/hostel1.jpg",
      title: "Hostel1",
      location: "Thamel, Kathmandu",
      rating: 5,
      type: "Male"
    },
    {
      img: "/public/hostel2.jpg",
      title: "Hostel2",
      location: "Thamel, Kathmandu",
      rating: 3,
      type: "Female"
    },
    {
      img: "/public/hostel3.jpg",
      title: "Hostel3",
      location: "Thamel, Kathmandu",
      rating: 4,
      type: "Male"
    },
    {
      img: "/public/hostel4.jpg",
      title: "Hostel4",
      location: "Thamel, Kathmandu",
      rating: 4,
      type: "Female"
    },
    {
      img: "/public/hostel5.jpg",
      title: "Hostel5",
      location: "Jorpati, Kathmandu",
      rating: 3,
      type: "Male"
    },
    {
      img: "/public/hostel6.jpg",
      title: "Hostel6",
      location: "Jorpati, Kathmandu",
      rating: 4,
      type: "Female"
    },
    {
      img: "/public/hostel7.jpg",
      title: "Hostel7",
      location: "Jorpati, Kathmandu",
      rating: 2,
      type: "Male"
    },
    {
      img: "/public/hostel8.jpg",
      title: "Hostel8",
      location: "Jorpati, Kathmandu",
      rating: 5,
      type: "Female"
    },
    {
      img: "/public/hostel9.jpg",
      title: "Hostel9",
      location: "Kapan, Kathmandu",
      rating: 4,
      type: "Male"
    },
    {
      img: "/public/hostel10.jpg",
      title: "Hostel10",
      location: "Kapan, Kathmandu",
      rating: 5,
      type: "Female"
    },
    {
      img: "/public/hostel11.jpg",
      title: "Hostel11",
      location: "Kapan, Kathmandu",
      rating: 4,
      type: "Male"
    },
    {
      img: "/public/hostel12.jpg",
      title: "Hostel12",
      location: "Kapan, Kathmandu",
      rating: 3,
      type: "Female"
    },
    {
      img: "/public/hostel13.jpg",
      title: "Hostel13",
      location: "Chabhil, Kathmandu",
      rating: 5,
      type: "Male"
    },
    {
      img: "/public/hostel14.jpg",
      title: "Hostel14",
      location: "Chabhil, Kathmandu",
      rating: 4,
      type: "Female"
    },
    {
      img: "/public/hostel15.jpg",
      title: "Hostel15",
      location: "Chabhil, Kathmandu",
      rating: 3,
      type: "Male"
    },
    {
      img: "/public/hostel16.jpg",
      title: "Hostel16",
      location: "Chabhil, Kathmandu",
      rating: 2,
      type: "Female"
    },
    {
      img: "/public/hostel17.jpg",
      title: "Hostel17",
      location: "Mitrapark, Kathmandu",
      rating: 4,
      type: "Male"
    },
    {
      img: "/public/hostel18.jpg",
      title: "Hostel18",
      location: "Mitrapark, Kathmandu",
      rating: 3,
      type: "Female"
    },
    {
      img: "/public/hostel19.jpg",
      title: "Hostel19",
      location: "Mitrapark, Kathmandu",
      rating: 5,
      type: "Male"
    },
    {
      img: "/public/hostel20.jpg",
      title: "Hostel20",
      location: "Mitrapark, Kathmandu",
      rating: 4,
      type: "Female"
    },
    {
      img: "/public/hostel21.jpg",
      title: "Hostel21",
      location: "Gaushala, Kathmandu",
      rating: 4,
      type: "Male"
    },
    {
      img: "/public/hostel22.jpg",
      title: "Hostel22",
      location: "Gaushala, Kathmandu",
      rating: 5,
      type: "Female"
    },
    {
      img: "/public/hostel23.jpg",
      title: "Hostel23",
      location: "Gaushala, Kathmandu",
      rating: 3,
      type: "Male"
    },
    {
      img: "/public/hostel24.jpg",
      title: "Hostel24",
      location: "Gaushala, Kathmandu",
      rating: 2,
      type: "Female"
    },
    {
      img: "/public/hostel20.jpg",
      title: "Hostel25",
      location: "Mitrapark, Kathmandu",
      rating: 5,
      type: "Male"
    },
    {
      img: "/public/hostel20.jpg",
      title: "Hostel26",
      location: "Mitrapark, Kathmandu",
      rating: 3,
      type: "Female"
    },
  ];

// Utility function to get related hostels by location excluding the current hostel
const getRelatedHostelsByLocation = (currentLocation: string, currentTitle: string, data: typeof hostelData) => {
  const filteredData = data.filter((hostel) => hostel.location === currentLocation && hostel.title !== currentTitle);
  const shuffled = filteredData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};

export default function HostelDetails() {
  const { hostelId } = useParams();
  const navigate = useNavigate();
  const hostelItem = hostelData.find((hostel) => hostel.title === title);

  // Get related hostels based on location excluding the current hostel
  const relatedHostels = hostelItem ? getRelatedHostelsByLocation(hostelItem.location, hostelItem.title, hostelData) : [];

  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  const handleTabChange = (tab: 'description' | 'reviews') => {
    setActiveTab(tab);
  };

  // Effect to update the content whenever the `title` changes
  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/hostel/${hostelId}`
        );
        const data = response.data.data;

        if (data) {
          setHostelItem(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching hostel details:', error);
        setLoading(false);
      }
    };

    fetchHostelDetails();

    // Load saved hostels from localStorage
    const saved = JSON.parse(localStorage.getItem('savedHostels')) || [];
    setSavedHostels(saved);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, [hostelId]);

  const calculateRoute = async () => {
    if (!hostelItem) return;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: location,
        destination: {
          lat: hostelItem.location.latitude,
          lng: hostelItem.location.longitude,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
          setCurrentDistance(result.routes[0].legs[0].distance.text);
          setCurrentDuration(result.routes[0].legs[0].duration.text);
        } else {
          console.error('Error fetching directions:', result);
        }
      }
    );
  };

  const handleSaveHostel = () => {
    const updatedSaved = [...savedHostels, hostelItem];
    setSavedHostels(updatedSaved);
    localStorage.setItem('savedHostels', JSON.stringify(updatedSaved));
  };

  const handleRemoveHostel = (hostel) => {
    const updatedSaved = savedHostels.filter((h) => h.id !== hostel.id);
    setSavedHostels(updatedSaved);
    localStorage.setItem('savedHostels', JSON.stringify(updatedSaved));
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const renderTabContent = () => {
    if (activeTab === 'description') {
      return (
        <Typography variant="body1" gutterBottom>
          {hostelItem.description || 'No description available.'}
        </Typography>
      );
    } else {
      return (
        <div>
          <Typography variant="h6">Customer Reviews</Typography>
          {hostelItem.reviews?.map((review, index) => (
            <Typography key={index} variant="body2">
              <strong>{review.author}:</strong> {review.comment}
            </Typography>
          )) || <Typography variant="body2">No reviews available.</Typography>}
        </div>
      );
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-[40px] font-bold py-10">
          Hostel <span className="text-[--primary-color]">Details</span>
        </h2>

        {hostelItem ? (
          <div className="hostel">
            <div className="grid grid-cols-2 gap-3 px-10 py-5">
              <div className="bg-gray-400 shadow-xl flex justify-center rounded-md overflow-hidden h-96 w-full">
                <img className="h-full w-full" src={hostelItem.img} alt={hostelItem.title} />
              </div>
              <div className="bg-white shadow-xl p-2">
                <h2 className="text-[35px] font-bold">{hostelItem.title}</h2>
                {RenderStar(hostelItem.rating)}
                {/* <p className='py-2'>{hostelItem.description}</p> */}
                <p className='pb-2'>
                  <LocationOnOutlinedIcon fontSize="small" />
                  {hostelItem.location}
                </p>
                <button className='w-40 border border-[#515151] justify-center py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[--primary-color] hover:border-none hover:text-white transition-all'>
                  Book Hostel
                </button>
              </div>
            </div>

            <div className="tab-navigation my-10">
              <div className="flex justify-center gap-10 mb-10">
                <button
                  className={`px-0 py-2 ${activeTab === 'description' ? ' border-b-[--primary-color] border-2 font-semibold text-[--primary-color]' : 'bg-gray-200'}`}
                  onClick={() => handleTabChange('description')}
                >
                  Description
                </button>
                <button
                  className={`px-0 py-2 ${activeTab === 'reviews' ? 'border-b-[--primary-color] border-2 font-semibold text-[--primary-color]' : 'bg-gray-200'}`}
                  onClick={() => handleTabChange('reviews')}
                >
                  Reviews
                </button>
              </div>

              <div className="tab-content mt-5 px-10">
                {activeTab === 'description' ? (
                  <div className="description-content">
                    <h3 className="text-[30px] font-bold">Hostel Description</h3>
                    {/* <p>{hostelItem.description}</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, adipisci!</p>
                  </div>
                ) : (
                  <div className="reviews-content">
                    <h3 className="text-[30px] font-bold">Customer Reviews</h3>
                    <div className="review mt-3">
                      <p><strong>John Doe:</strong> Great hostel, very clean!</p>
                      <p><strong>Jane Smith:</strong> Friendly staff and good location.</p>
                      <p><strong>Sam Wilson:</strong> Would stay again!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Hostel not found</p>
        )}

        <div className="related-products py-10">
          <h2 className="text-[40px] text-center font-bold mb-5">
            Related <span className="text-[--primary-color]">Hostels</span>
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {relatedHostels.map((hostel, index) => (
              <div
                key={index}
                className="shadow-lg border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:bg-gray-300 hover:-translate-y-2 transition-transform"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => navigate(`/hostel/${hostel.title}`)} // Navigate to clicked hostel
              >
                <div className='h-56 mb-2'>
                  <img src={hostel.img} alt={hostel.title} className="h-full w-full object-cover" />
                </div>
                <div className='px-5'>
                  <p className="text-[24px] font-bold">{hostel.title}</p>
                  {RenderStar(hostel.rating)}
                  <p className="text-[#515151] mb-3">
                    <LocationOnOutlinedIcon fontSize="small" />
                    {hostel.location}
                  </p>
                  <button className='w-full mb-5 border justify-center border-[#515151] px-12 py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[--primary-color] hover:border-none hover:text-white transition-all'>
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
