import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import './Header.scss';

export default function HeaderFilter(props: any) {
  return (
    <header className={'header-component'}>
      <Toolbar className={'header-toolbar'}
  
       >
      <Item
          
          location={'before'}
          widget={'dxButton'}
          cssClass={'menu-button'}
          
        >
          <Button icon="filter" stylingMode="text" onClick={props.toggleMenu} />
        </Item>
        <Item
          location={'before'}
          cssClass={'header-title'}
          text={props.title}
          visible={props.enabled}
        />
        
        
      </Toolbar>
    </header>
)}
