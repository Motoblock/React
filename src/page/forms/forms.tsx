import React from 'react';
import { AddCard } from '../../component/UI/AddCard/AddCard';
import classForm from './forms.module.css';

export const Forms = () => {
  return (
    <>
      <div className={classForm.nameField}>Enter the cats details</div>
      <AddCard />
    </>
  );
};
