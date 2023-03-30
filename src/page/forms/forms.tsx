import React from 'react';
import { AddCard } from '../../component/UI/AddCard/AddCard';
import classForm from './form.module.css';

export const Forms = () => {
  return (
    <>
      <div className={classForm.nameField}>Enter the cats details</div>
      <div className={classForm.formCard}>
        <AddCard />
      </div>
    </>
  );
};
