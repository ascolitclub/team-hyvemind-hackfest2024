{
  /* {hostelItem ? (
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
        )} */
}
