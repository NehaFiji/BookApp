import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Label = styled.label`
  margin: 0.5rem 0;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Editprofile = () => {
  const [profile, setProfile] = useState({
    name: '',
    place:'',
    age:'',
    emailid: '',
    password:'',
    ContactDetails: '',
    PhoneNumber:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform profile update logic here
    alert('Profile updated successfully');
  };

  return (
    <Container>
      <h2>Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />
        <Label>Place</Label>
        <Input
          type="text"
          name="place"
          value={profile.place}
          onChange={handleChange}
          required
        />
        <Label>Age</Label>
        <Input
          type="text"
          name="age"
          value={profile.age}
          onChange={handleChange}
          required
        />
        <Label>Email-Id</Label>
        <Input
          type="emailid"
          name="emailid"
          value={profile.emailid}
          onChange={handleChange}
          required
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          required
        />
        <Label>Contact Details</Label>
        <Input
          type="text"
          name="ContactDetails"
          value={profile.ContactDetails}
          onChange={handleChange}
          required
        />
        <Label>Phone No</Label>
        <Input
          type="text"
          name="PhoneNumber"
          value={profile.PhoneNumber}
          onChange={handleChange}
          required
        />
        <Button type="submit">Update Profile</Button>
      </Form>
    </Container>
  );
};

export default Editprofile;