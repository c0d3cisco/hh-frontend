import React, { useState } from 'react';
import { Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function Approvals() {
  // State to hold approval items
  const [approvalItems, setApprovalItems] = useState([
    { id: 1, title: 'John Doe', content: 'This is the content of Item 1.', approved: false, expanded: false },
    { id: 2, title: 'Jane Smith', content: 'This is the content of Item 2.', approved: false, expanded: false },
    { id: 3, title: 'Michael Johnson', content: 'This is the content of Item 3.', approved: false, expanded: false },
    // Add more items as needed
  ]);

  // State to hold the selected item for deletion confirmation
  const [selectedItem, setSelectedItem] = useState(null);

  // State to control the visibility of the delete confirmation dialog
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

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
  const handleApproveItem = (item) => {
    setApprovalItems((prevItems) =>
      prevItems.map((prevItem) => ({
        ...prevItem,
        approved: prevItem.id === item.id ? !prevItem.approved : prevItem.approved,
      }))
    );
  };

  // Function to perform the delete action for the selected item
  const handleDeleteItem = () => {
    // Perform delete action for the selected item
    // ...

    // Close the delete confirmation dialog and reset the selected item
    setDeleteConfirmationOpen(false);
    setSelectedItem(null);
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

  return (
    <div>
      <h2>Approvals</h2>
      <Grid container spacing={2}>
        {approvalItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <Button onClick={() => handleExpandItem(item)}>Expand</Button>
              {item.expanded && (
                <div>
                  <p>Expanded content for {item.title} goes here.</p>
                  <Button onClick={() => handleApproveItem(item)}>{item.approved ? 'Unapprove' : 'Approve'}</Button>
                  <Button onClick={() => handleDeleteConfirmation(item)}>Delete</Button>
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
