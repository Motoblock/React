import React from 'react';
import mail from './../../assets/images/male-logo.png';
import woman from './../../assets/images/woman-logo.png';

export function genderImg(sex: number) {
  if (sex === 1) return <img src={mail} alt={`муж`} />;
  return <img src={woman} alt={`жен`} />;
}
