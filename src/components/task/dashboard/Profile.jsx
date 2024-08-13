import React from 'react'

function Profile() {
  return (
    
  <div className="max-w-sm mx-auto bg-card rounded-lg shadow-lg p-6">
  <div className="flex items-center mb-4 bg-blue-gradient">
    <img className="w-16 h-16 rounded-full mr-4" src="images/userImage.png" alt="Profile Picture" />
    <div>
      <h2 className="text-lg font-semibold text-foreground">Profile</h2>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm px-2 py-1 rounded">Update Pic</button>
    </div>
  </div>
  <div className="text-muted-foreground mb-2">
    <p><strong>Name:</strong> Astha Sachan</p>
    <p><strong>EmpId:</strong> U2325</p>
    <p><strong>Email:</strong> sachan***@gmail.com</p>
    <p><strong>Password:</strong> U2325</p>
    <p><strong>Phone:</strong> 885*****22</p>
  </div>
  <button className="bg-primary text-primary-foreground hover:bg-primary/80 w-full py-2 rounded">Update</button>
</div>

  )
}

export default Profile
