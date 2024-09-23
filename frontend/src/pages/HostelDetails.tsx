import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { RenderStar } from '../components/dynamic renderer/RenderStar';
import axios from 'axios';
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = { lat: 27.7107273, lng: 85.3109501 }; // Default coordinates

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

  const handleTabChange = (tab: 'description' | 'reviews') => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="w-full h-20  top-0  bg-[#041E42]"></div>
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
              <div className="bg-white p-2  h-full col-span-4">
                <h2 className="text-3xl font-semibold mb-2">
                  {hostelItem.name}
                </h2>
                {RenderStar(hostelItem.rating)}
                <p className="pt-2 pb-2 text-sm flex ">
                  <LocationOnOutlinedIcon
                    fontSize="small"
                    style={{ color: 'var(--primary-color)' }}
                  />
                  {hostelItem.vicinity}
                </p>
                <div className="flex flex-col gap-y-1 mb-4 border-t border-b py-1 w-max">
                  <div className="flex gap-2 ">
                    <h3 className="font-medium text-[17px]">Owner Name:</h3>
                    {hostelItem.owner ? (
                      <p>{`hostelItem.description`}</p>
                    ) : (
                      <p className="italic">No Info</p>
                    )}
                  </div>
                  <div className="flex gap-2 ">
                    <h3 className="font-medium text-[17px]">Hostel Type:</h3>
                    {hostelItem.type ? (
                      <p>{`hostelItem.description`}</p>
                    ) : (
                      <p className="italic">No Info</p>
                    )}
                  </div>
                </div>
                <div className="buttons-links flex flex-wrap  gap-4 items-center">
                  <button className=" flex justify-center border border-gray-300 px-8 py-2 rounded-lg font-semibold hover:bg-[--btn-primary] hover:text-white active:translate-y-0.5 transition-all">
                    Book
                  </button>
                  <button className=" flex justify-center border border-gray-300 px-8 py-2 rounded-lg font-semibold hover:bg-[--btn-primary] hover:text-white active:translate-y-0.5 transition-all">
                    Get Direction
                  </button>
                  <FavoriteIcon
                    className="cursor-pointer"
                    style={{ color: 'var(#F5F7F8)' }}
                  />
                </div>
              </div>
              <div className="tab-navigation my-10 col-span-3 h-full w-full">
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
                        lng: hostelItem.location.latitude,
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
            <div className="flex justify-center   gap-10 mb-10">
              <button
                className={`px-0 py-2 ${
                  activeTab === 'description'
                    ? ' border-b-2 border-[--primary-color]  font-semibold text-[--primary-color]'
                    : 'font-semibold'
                }`}
                onClick={() => handleTabChange('description')}
              >
                Description
              </button>
              <button
                className={`px-0 py-2 ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-[--primary-color] font-semibold text-[--primary-color]'
                    : 'font-semibold'
                }`}
                onClick={() => handleTabChange('reviews')}
              >
                Reviews
              </button>
            </div>

            <div className="tab-content mt-4 px-12">
              {activeTab === 'description' ? (
                <div className="description-content">
                  <h3 className="text-2xl mb-2 font-bold">
                    Hostel Description
                  </h3>

                  {hostelItem.description ? (
                    <p>{`hostelItem.description`}</p>
                  ) : (
                    <p className="italic">Description Not Available</p>
                  )}
                </div>
              ) : (
                <div className="reviews-content">
                  <h3 className="text-2xl mb-2 font-bold">Customer Reviews</h3>
                  {hostelItem.review ? (
                    <div>hostelItem.review</div>
                  ) : (
                    <p className="italic">Review Not Available</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Hostel not found</p>
        )}

        {/* {hostelItem ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt={hostelItem.name}
                  height="200"
                  image={
                    hostelItem.photos[0]
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hostelItem.photos[0].photo_reference}&key=AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI`
                      : hostelItem.icon
                  }
                />
                <CardContent>
                  <Typography variant="h5">{hostelItem.name}</Typography>
                  {RenderStar(hostelItem.rating)}
                  <Typography variant="body2" color="textSecondary">
                    <LocationOnOutlinedIcon fontSize="small" />{" "}
                    {hostelItem.vicinity}
                  </Typography>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={calculateRoute}
                      style={{ marginTop: "10px" }}
                    >
                      Get Directions
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSaveHostel}
                      style={{ marginLeft: "10px" }}
                    >
                      Save Hostel
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleOpenDialog}
                      style={{ marginLeft: "10px" }}
                    >
                      Remove from Saved
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <LoadScript googleMapsApiKey="AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={location}
                  zoom={15}
                >
                  <Marker position={location} label="You" />
                  <Marker
                    position={{
                      lat: hostelItem.geometry.location.latitude,
                      lng: hostelItem.geometry.location.latitude,
                    }}
                    label={hostelItem.name}
                  />
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </GoogleMap>
              </LoadScript>
              {currentDistance && (
                <Typography
                  variant="h6"
                  align="center"
                  style={{ marginTop: "10px" }}
                >
                  Distance: {currentDistance} - Duration: {currentDuration}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <div className="tab-navigation">
                <Button
                  variant="outlined"
                  onClick={() => setActiveTab("description")}
                  style={{ marginRight: "10px" }}
                >
                  Description
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </Button>
              </div>

              <div className="tab-content" style={{ marginTop: "20px" }}>
                {renderTabContent()}
              </div>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" align="center" gutterBottom>
                Saved Hostels
              </Typography>
              {savedHostels.length === 0 ? (
                <Typography variant="body1" align="center">
                  No saved hostels.
                </Typography>
              ) : (
                savedHostels.map((hostel, index) => (
                  <Card key={index} style={{ marginBottom: "10px" }}>
                    <CardContent>
                      <Typography variant="h6">{hostel.name}</Typography>
                      <Typography variant="body2">
                        <LocationOnOutlinedIcon fontSize="small" />{" "}
                        {hostel.vicinity}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveHostel(hostel)}
                        style={{ marginTop: "10px" }}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6" align="center">
            Hostel not found
          </Typography>
        )} */}

        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Remove Hostel</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to remove this hostel from your saved list?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleRemoveHostel(hostelItem);
                handleCloseDialog();
              }}
              color="secondary"
            >
              Remove
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
