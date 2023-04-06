import React from 'react';
import mail from './../../assets/images/male-logo.png';
import woman from './../../assets/images/woman-logo.png';

export function genderImg(sex: number, name: string) {
  if (sex === 1) return <img src={mail} alt={`Кот по кличке ` + name} />;
  return <img src={woman} alt={`Кот по кличке ` + name} />;
}
