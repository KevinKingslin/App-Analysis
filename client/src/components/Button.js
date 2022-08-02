import React from 'react';
import './button.css';

export const Button = () => {
  return (
    <div>
  <div class="btn-group dropright">
  <button type="button" class="btn btn-primary dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Analyze App
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="/login">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
    </div>
  )
}
export default Button
