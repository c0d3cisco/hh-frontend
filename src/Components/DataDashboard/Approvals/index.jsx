import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

export default function Approvals() {
  // State to hold approval items
  const [approvalItems, setApprovalItems] = useState([]);
  const apiUrl = 'https://helen-house-backend-v3uq.onrender.com/api/userData';
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  // State to hold the selected item for deletion confirmation
  const [selectedItem, setSelectedItem] = useState(null);

  // State to control the visibility of the delete confirmation dialog
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  // Fetch approval items from the API
  useEffect(() => {
    fetchApprovalItems();
  }, []);

  const fetchApprovalItems = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }

      const response = await axios.get(apiUrl, { headers });
      setApprovalItems(response.data);
    } catch (error) {
      console.log('Error fetching approval items:', error.message);
    }
  };

  // Function to handle expanding/collapsing an approval item
  const handleExpandItem = (item) => {
    setApprovalItems((prevItems) =>
      prevItems.map((prevItem) => ({
        ...prevItem,
        expanded: prevItem.id === item.id ? !prevItem.expanded : false,
      }))
    );
  };

  // Function to handle approving/unapproving an approval item
  const handleApproveItem = async (item) => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }

      // Update approval status in the backend
      await axios.put(`${apiUrl}/${item.userId}`, { approved: true }, { headers });
      
      // Update approval status in the frontend
      setApprovalItems((prevItems) =>
        prevItems.map((prevItem) => ({
          ...prevItem,
          approved: prevItem.id === item.id ? !prevItem.approved : prevItem.approved,
        }))
      );
    } catch (error) {
      console.log('Error updating approval status:', error.message);
    }
  };

  // Function to perform the delete action for the selected item
  const handleDeleteItem = async () => {
    try {
      // Perform delete action for the selected item in the backend
      await axios.delete(`${apiUrl}/${selectedItem.id}`);
      
      // Remove the item from the state in the frontend
      setApprovalItems((prevItems) => prevItems.filter((item) => item.id !== selectedItem.id));

      // Close the delete confirmation dialog and reset the selected item
      setDeleteConfirmationOpen(false);
      setSelectedItem(null);
    } catch (error) {
      console.log('Error deleting item:', error.message);
    }
  };

  // Function to handle the click on the "Delete" button of an approval item
  const handleDeleteConfirmation = (item) => {
    setSelectedItem(item); // Set the selected item for deletion confirmation
    setDeleteConfirmationOpen(true); // Open the delete confirmation dialog
  };

  // Function to handle the click on the "Cancel" button of the delete confirmation dialog
  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false); // Close the delete confirmation dialog
    setSelectedItem(null); // Reset the selected item
  };
  let i = 1;
  return (
    <div>
      <h2>Approvals</h2>
      <Grid container spacing={2}>
        {approvalItems.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <h2>{person.preferred_name}</h2>
              <h3>{person.first_name} {person.last_name}</h3>
              <Button onClick={() => handleExpandItem(person)}>Expand</Button>
              {person.expanded && (
                <div>
                  {
                    Object.entries(person).map((data) => (
                      data.map((item) => {
                        if(i === 1) {
                          i = i - 1
                          return <p><strong>{item}</strong></p>
                        } else {
                          i = i + 1
                          return <p>{item?.toString()}</p>
                        }
                      })
                    ))
                  }
                  <Button onClick={() => handleApproveItem(person)}>{person.approved ? 'Unapprove' : 'Approve'}</Button>
                  <Button onClick={() => handleDeleteConfirmation(person)}>Delete</Button>
                </div>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmationOpen} onClose={handleCloseDeleteConfirmation}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete {selectedItem?.title}?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteConfirmation}>Cancel</Button>
          <Button onClick={handleDeleteItem} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
