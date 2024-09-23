import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { RenderStar } from "../components/dynamic renderer/RenderStar";
import axios from "axios";
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
} from "@mui/material";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = { lat: 27.7107273, lng: 85.3109501 }; // Default coordinates

export default function HostelDetails() {
  const { hostelId } = useParams();

  const [hostelItem, setHostelItem] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [location, setLocation] = useState(defaultCenter);
  const [savedHostels, setSavedHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentDistance, setCurrentDistance] = useState("");
  const [currentDuration, setCurrentDuration] = useState("");

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
        console.error("Error fetching hostel details:", error);
        setLoading(false);
      }
    };

    fetchHostelDetails();

    // Load saved hostels from localStorage
    const saved = JSON.parse(localStorage.getItem("savedHostels")) || [];
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
          lat: hostelItem.geometry.location.latitude,
          lng: hostelItem.geometry.location.longitude,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
          setCurrentDistance(result.routes[0].legs[0].distance.text);
          setCurrentDuration(result.routes[0].legs[0].duration.text);
        } else {
          console.error("Error fetching directions:", result);
        }
      }
    );
  };

  const handleSaveHostel = () => {
    const updatedSaved = [...savedHostels, hostelItem];
    setSavedHostels(updatedSaved);
    localStorage.setItem("savedHostels", JSON.stringify(updatedSaved));
  };

  const handleRemoveHostel = (hostel) => {
    const updatedSaved = savedHostels.filter((h) => h.id !== hostel.id);
    setSavedHostels(updatedSaved);
    localStorage.setItem("savedHostels", JSON.stringify(updatedSaved));
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const renderTabContent = () => {
    if (activeTab === "description") {
      return (
        <Typography variant="body1" gutterBottom>
          {hostelItem.description || "No description available."}
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
    <div className="container mx-auto">
      <Typography variant="h4" align="center" gutterBottom>
        Hostel <span style={{ color: "#1976d2" }}>Details</span>
      </Typography>

      {hostelItem ? (
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
      )}

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
  );
}
