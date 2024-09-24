import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RenderStar } from '../components/dynamic renderer/RenderStar';
import axios from 'axios';
import {
  Button,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const mapContainerStyle = {
  width: '100%',
  height: '400px', // Adjust height as needed
};

const defaultCenter = { lat: 27.7107273, lng: 85.3109501 }; // Default center coordinates

export default function HostelDetails() {
  const { hostelId } = useParams();

  const [hostelItem, setHostelItem] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [location, setLocation] = useState(defaultCenter);
  const [savedHostels, setSavedHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentDistance, setCurrentDistance] = useState('');
  const [currentDuration, setCurrentDuration] = useState('');

  useEffect(() => {
    const fetchHostelDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3002/hostel/${hostelId}`
        );
        const data = response.data.data;

        if (data) {
          setHostelItem(data);
        }
      } catch (error) {
        console.error('Error fetching hostel details:', error);
      } finally {
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

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: location,
        destination: {
          lat: hostelItem.location.latitude,
          lng: hostelItem.location.longitude,
        },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
          setCurrentDistance(result.routes[0].legs[0].distance.text);
          setCurrentDuration(result.routes[0].legs[0].duration.text);
          handleOpenDialog(); // Open dialog when route is calculated
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

  if (loading) return <CircularProgress />;

  // Mock reviews
  const mockReviews = [
    {
      user: 'John Doe',
      comment:
        'Amazing hostel! The staff were friendly and the facilities were great.',
      rating: 4,
    },
    {
      user: 'Jane Smith',
      comment: 'I had a wonderful stay. Clean rooms and a great location!',
      rating: 5,
    },
    {
      user: 'Alice Johnson',
      comment: 'Good value for money. The atmosphere was lovely!',
      rating: 4,
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-5xl font-semibold py-12">
        Hostel <span className="text-[--primary-color]">Details</span>
      </h2>

      {hostelItem ? (
        <div className="hostel">
          <div className="grid grid-cols-12 gap-4 px-12 py-5 items-center">
            <div className="bg-[--primary-color] shadow-xl flex justify-center rounded-md overflow-hidden h-96 w-full col-span-5">
              <img
                className="h-full w-full"
                src={
                  hostelItem.photos[0]
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hostelItem.photos[0].photo_reference}&key=AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI`
                    : hostelItem.icon
                }
                alt={hostelItem.title}
              />
            </div>
            <div className="bg-white p-2 h-full col-span-4">
              <h2 className="text-3xl font-semibold mb-2">{hostelItem.name}</h2>
              {RenderStar(hostelItem.rating)}
              <p className="pt-2 pb-2 text-sm flex">
                <LocationOnOutlinedIcon
                  fontSize="small"
                  style={{ color: 'var(--primary-color)' }}
                />
                {hostelItem.vicinity}
              </p>
              <div className="flex flex-col gap-y-1 mb-4 border-t border-b py-1 w-max">
                <div className="flex gap-2">
                  <h3 className="font-medium text-[17px]">Owner Name:</h3>
                  <p>
                    {hostelItem.owner || (
                      <span className="italic">No Info</span>
                    )}
                  </p>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-medium text-[17px]">Hostel Type:</h3>
                  <p>
                    {hostelItem.type || <span className="italic">No Info</span>}
                  </p>
                  <h3 className="font-medium text-[17px]">Hostel Price:</h3>
                  <p>
                    {hostelItem.price || (
                      <span className="italic">No Price</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="buttons-links flex flex-wrap gap-4 items-center">
                <button
                  className="flex justify-center border border-gray-300 px-8 py-2 rounded-lg font-semibold hover:bg-[--btn-primary] hover:text-white active:translate-y-0.5 transition-all"
                  onClick={handleSaveHostel}
                >
                  Save Hostel
                </button>
                <button
                  className="flex justify-center border border-gray-300 px-8 py-2 rounded-lg font-semibold hover:bg-[--btn-primary] hover:text-white active:translate-y-0.5 transition-all"
                  onClick={calculateRoute}
                >
                  Get Direction
                </button>
                <FavoriteIcon
                  className="cursor-pointer"
                  style={{ color: '#F5F7F8' }}
                />
              </div>
            </div>
            <div className="col-span-3 h-full w-full">
              <LoadScript googleMapsApiKey="AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={location}
                  zoom={15}
                >
                  <Marker position={location} label="You" />
                  <Marker
                    position={{
                      lat: hostelItem.location.latitude,
                      lng: hostelItem.location.longitude,
                    }}
                    label={hostelItem.name}
                  />
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-10 mb-10">
            <button
              className={`px-0 py-2 ${
                activeTab === 'description'
                  ? 'border-b-2 border-[--primary-color] font-semibold text-[--primary-color]'
                  : 'font-semibold'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-0 py-2 ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-[--primary-color] font-semibold text-[--primary-color]'
                  : 'font-semibold'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'description' ? (
            <div className="px-12 py-4">
              <h3 className="text-2xl font-semibold mb-2">Description</h3>
              <p>{hostelItem.description || 'No description available.'}</p>
            </div>
          ) : (
            <div className="px-12 py-4">
              <h3 className="text-2xl font-semibold mb-2">Reviews</h3>
              <div>
                {mockReviews.length > 0 ? (
                  mockReviews.map((review, index) => (
                    <Card key={index} className="mb-2">
                      <CardHeader title={review.user} />
                      <CardContent>
                        <Typography variant="body2">
                          {review.comment}
                        </Typography>
                        <div className="flex items-center mt-2">
                          {RenderStar(review.rating)}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p>No reviews available</p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Hostel not found</p>
      )}

      {/* Directions Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Directions to {hostelItem?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Distance: {currentDistance}</Typography>
          <Typography variant="body1">Duration: {currentDuration}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
