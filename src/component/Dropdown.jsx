import React, {useState} from 'react';

const Dropdown = ({title, children}) => {
    const [open, setOpen] = useState(false);

  return (
    <div className='dropdown'
    onMouseEnter={() => setOpen(true)}
     onMouseLeave={() => setOpen(false)}
     >
    <a href='#' className='dropdown-title'>{title} &#9662;</a>
    {open && (
        <div className='dropdown-menu'>
            {children}
            </div>
    )}
    
    
    </div>
  )
}

export default Dropdown;