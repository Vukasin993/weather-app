import React from 'react';
import styles from './search.module.scss';
import search from '../../assets/images/search.svg';
import Input from '../input/index';

const SearchBar = ({ customClass, onChange, onBlur, value, placeholder, name }) => {
  return (
    <div className="common">
      <div className={styles.inputBox}>
        <Input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} onBlur={onBlur} />
      </div>
      <div className={styles.icon}>
        <img src={search} alt="Search" />
      </div>
    </div>
  );
}

export default SearchBar;