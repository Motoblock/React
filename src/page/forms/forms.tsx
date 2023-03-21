import React from 'react';
import { CatForm } from '../../component/UI/catForm/catForm';
import classForm from './form.module.css';

export class Forms extends React.Component {
  // prop: SearchProps = { type: 'search', placeholder: 'Input some body...' };
  render() {
    return (
      <>
        <div className={classForm.nameField}>Enter the cats details</div>
        <div className={classForm.formCard}>
          <CatForm />
        </div>
      </>
    );
  }
}

export default Forms;
