import React from 'react';
import urls from '../../urls';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      <Link to={urls.products} style={{ textDecoration: 'none' }}>
        <Button className="main-button" variant="contained" color="secondary">
          Go to products
        </Button>
      </Link>
    </div>
  );
}
