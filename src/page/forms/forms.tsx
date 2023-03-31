import React from 'react';
import { AddCard } from '../../component/UI/AddCard/AddCard';
import classForm from './forms.module.css';

export const Forms = () => {
  return (
    <>
      <h2 className={classForm.nameField}>Enter the cats details</h2>
      <AddCard />
    </>
  );
};
