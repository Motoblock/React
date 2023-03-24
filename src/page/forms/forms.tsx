import React from 'react';
import { AddCard } from '../../component/UI/AddCard/AddCard';
import classForm from './form.module.css';

export class Forms extends React.Component {
  render() {
    return (
      <>
        <div className={classForm.nameField}>Enter the cats details</div>
        <div className={classForm.formCard}>
          <AddCard />
        </div>
      </>
    );
  }
}
